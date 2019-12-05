import React, { useState } from "react";
import { Formik, Field, FormikActions } from "formik";
import * as yup from "yup";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";
import useAuth from "../context/authentication/useAuth";
import { TextFormField } from "./components/TextFormField";
import { SubmitError, FormButton, StyledFormik, Message } from "./components/styles";

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
});

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { updateAuth } = useAuth();
  const [login] = useLoginMutation();
  const [resError, setResError] = useState(false);

  const onSubmit = async (
    { email, password }: LoginFormValues,
    { setSubmitting }: FormikActions<LoginFormValues>
  ) => {
    try {
      const response = await login({
        variables: {
          email,
          password
        }
      });

      if (response && response.data) {
        setAccessToken(response.data.login.accessToken);
        updateAuth(true);
      }
    } catch (e) {
      setResError(true);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <StyledFormik>
          <Field
            label="Email"
            name="email"
            placeholder="Enter Email..."
            component={TextFormField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password..."
            component={TextFormField}
          />
          {resError && (
            <SubmitError>
              There was a problem with your username or password.
            </SubmitError>
          )}
          <FormButton
            type="submit"
            disabled={isSubmitting || !!(errors.email || errors.password)}
          >
            log in
          </FormButton>
          <Message href="/">Forgot Password?</Message>
        </StyledFormik>
      )}
    </Formik>
  );
};
