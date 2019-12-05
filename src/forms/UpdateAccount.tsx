import React, { useState } from "react";
import Grid from "styled-components-grid";
import {
  useMeQuery,
  useUpdateMeMutation,
  MeQuery,
  MeDocument
} from "../generated/graphql";
import { Formik, Field } from "formik";
import { TextFormField } from "./components/TextFormField";
import { SingleDateField } from "./components/SingleDateField";
import { FormButton, SubmitError, Label, StyledFormik, Col } from "./components/styles";
import moment from "moment";
import { Loading } from '../components/Loading';

export const UpdateAccountForm = () => {
  const [resError, setResError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const { data, loading, error } = useMeQuery();
  const [updateProfile] = useUpdateMeMutation();

  if (error) return <div>There was an error connecting to the server.</div>;
  if (loading || !data) return <Loading />;
  const { firstName, lastName, dateOfBirth, email } = data.me!;

  return (
        <Formik
          initialValues={{
            firstName,
            lastName,
            dateOfBirth: dateOfBirth ? moment(dateOfBirth) : null,
            email
          }}
          onSubmit={async (values, actions) => {
            setResError(false);
            try {
              await updateProfile({
                variables: {
                  firstName: values.firstName!,
                  lastName: values.lastName!,
                  dateOfBirth: values.dateOfBirth
                },
                update: (store, { data: updateData }) => {
                  if (!updateData) return null;
                  store.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: {
                        ...data.me!,
                        firstName: values.firstName!,
                        lastName: values.lastName!,
                        dateOfBirth: values.dateOfBirth
                      }
                    }
                  });
                }
              });
              setSuccessMsg(true);
              setTimeout(() => setSuccessMsg(false), 3500);
            } catch (e) {
              setResError(true);
            }

            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <StyledFormik>
              <Grid>
                <Col size={{ xs: 1, md: 1 / 2 }}>
                  <Label htmlFor="firstName">First Name</Label>
                  <Field
                    label="firstName"
                    name="firstName"
                    placeholder="First Name..."
                    autocomplete="off"
                    component={TextFormField}
                  />
                </Col>
                <Col size={{ xs: 1, md: 1 / 2 }}>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Field
                    label="lastName"
                    name="lastName"
                    placeholder="Last Name..."
                    component={TextFormField}
                  />
                </Col>
                <Col size={{ xs: 1, md: 1 / 2 }}>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    label="email"
                    name="email"
                    disabled
                    placeholder="Email..."
                    component={TextFormField}
                  />
                </Col>
                <Col size={{ xs: 1, md: 1 / 2 }}>
                  <Label>Date of birth</Label>
                  <Field name="dateOfBirth" component={SingleDateField} />
                </Col>
                {resError && !successMsg && !isSubmitting && (
                  <Col>
                    <SubmitError>
                      There was a problem with your username or password.
                    </SubmitError>
                  </Col>
                )}
                {successMsg && (
                  <Col>
                    <SubmitError>Your profile has been updated.</SubmitError>
                  </Col>
                )}
                <Col size={1}>
                  <FormButton disabled={!!isSubmitting} type="submit">
                    Update Profile
                  </FormButton>
                </Col>
              </Grid>
            </StyledFormik>
          )}
        </Formik>
  );
};
