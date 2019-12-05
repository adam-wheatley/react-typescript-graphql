import React from "react";
import { FieldProps, getIn } from "formik";
import styled from "styled-components";

interface FormInputProps {
  errorText: string,
}
const FormInput = styled.input<FormInputProps>`
  width: 100%;
  box-sizing: border-box;
  background: ${p => p.theme.input.background};
  border: 0;
  padding: 15px;
  border-radius: ${p => p.theme.input.borderRadius};
  margin-bottom: ${p => p.errorText ? `0px` : `20px`};
`;

export const ErrorText = styled.p`
  color: ${p => p.theme.primaryColor};
`;

export const TextFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <>
      <FormInput errorText={errorText} {...field} {...props} />
      {errorText && <ErrorText>{errorText.charAt(0).toUpperCase() + errorText.slice(1)}.</ErrorText>}
    </>
  );
};
