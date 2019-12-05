import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { getIn } from "formik";
import { ErrorText } from "./TextFormField";
import { DateRangeFieldStyles } from './DateRangeFieldStyles';

const DatePickerWithFormik: React.FC<any> = ({
  startDateId,
  endDateId,
  form: { setFieldValue, setFieldTouched, values, touched, errors },
  field,
  onChange,
  ...props
}) => {
  const [focusedInput, setFocusedInput] = useState<any>(null);
  const errorText = getIn(touched, field.name) && (getIn(errors, 'endDate') || getIn(errors, 'startDate'));

  return (
    <DateRangeFieldStyles>
      <DateRangePicker
        startDate={values.startDate}
        startDateId="Start"
        endDate={values.endDate}
        endDateId="End"
        onDatesChange={({ startDate, endDate }) => {
          if (onChange) {
            onChange({ startDate, endDate });
          }
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        noBorder
        transitionDuration={0}
        minimumNights={0}
        customArrowIcon={<div />}
      />
      {errorText && <ErrorText>Please enter a date range.</ErrorText>}
    </DateRangeFieldStyles>
  );
};

export default DatePickerWithFormik;
