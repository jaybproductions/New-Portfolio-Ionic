import React from "react";
import { toast } from "../helpers/toast";

function useForm(initialState, validate, action) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        action();
        setValues(initialState);
        setSubmitting(false);
      } else {
        toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
  }, [action, errors, initialState, isSubmitting]);

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    const validationErrors = validate(values);
    toast("Thanks for your message! I will be in touch soon.", 4000);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    values,
    setValues,
    isSubmitting,
  };
}

export default useForm;
