import React, { useState } from "react";

const useForm = (onSubmit, validators) => {
  const [value, setValue] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const onChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validators(value));
    if (Object.values(validators(value)).length === 0) {
      onSubmit();
      setValue({});
    }
  };

  return { value, onChange, handleSubmit, errorMessage };
};

export default useForm;
