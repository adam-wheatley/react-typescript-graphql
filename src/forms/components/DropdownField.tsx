import React from "react";
import Select from "react-select";
import { getIn } from 'formik';
import { ErrorText } from './TextFormField';
import { withTheme } from "styled-components";
import { darken } from 'polished';

const customStyles = (theme: any) => ({
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? theme.white : provided.color
  }),
  control: (base: any, state: any) => ({
    ...base,
    background: theme.input.backgroundColor,
    fontSize: "19px",
    padding: "4px",
    border: "none",
    borderRadius: theme.input.borderRadius,
    borderBottom: state.isFocused ? `2px solid ${theme.primaryColor}` : "2px solid #f2f2f6",
    boxShadow: "none",
    marginBottom: '15px',
  }),
  menu: (base: any) => ({
    ...base,
    fontSize: "19px"
  }),
  menuList: (base: any, state: any) => ({
    ...base,
    padding: 0
  })
});

const DropdownFieldComponent: React.FC<any> = ({ 
    options,
    field,
    form, 
    isDisabled,
    onChange,
    values,
    theme,
}) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <>
    <Select
      isDisabled={isDisabled}
      value={options ? options.find((option: any) => option.value === field.value) : ''}
      options={options}
      name={field.name}
      styles={customStyles(theme)}
      onChange={(option: any) => {
        form.setFieldValue(field.name, option.value);
        if (onChange) {
          onChange(option);
        }
      }}
      onBlur={field.onBlur}
      theme={selectTheme => ({
        ...selectTheme,
        colors: {
          ...selectTheme.colors,
          primary: theme.primaryColor,
          primary25: darken(0.25, theme.primaryColor),
          primary50: darken(0.50, theme.primaryColor),
          primary75: darken(0.75, theme.primaryColor),
        }
      })}
    />
    {errorText && <ErrorText>{errorText.charAt(0).toUpperCase() + errorText.slice(1)}.</ErrorText>}
    </>
  );
};

const DropdownField = withTheme(DropdownFieldComponent);

export { DropdownField };
