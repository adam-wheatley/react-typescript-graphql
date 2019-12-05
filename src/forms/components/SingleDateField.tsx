import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { FieldProps } from "formik";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { DateRangeFieldStyles } from "./DateRangeFieldStyles";

export const SingleDateField: React.FC<FieldProps> = ({
  form: { setFieldValue, values },
  field
}) => {
  const [focusedInput, setFocusedInput] = useState<Boolean | null>(false);

  return (
    <DateRangeFieldStyles>
      <SingleDatePicker
        date={values[field.name]}
        id={`${field.name}-id`}
        onDateChange={date => setFieldValue(field.name, date)}
        focused={!!focusedInput}
        onFocusChange={({ focused }) => setFocusedInput(focused)}
        numberOfMonths={1}
        openDirection="down"
        isOutsideRange={day => moment().diff(day) < 0}
        enableOutsideDays
        transitionDuration={0}
      />
    </DateRangeFieldStyles>
  );
};
