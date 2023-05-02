import React, { useState } from "react";

const useForm = (onSubmit, validators, data) => {
  const [value, setValue] = useState(data);
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
      setValue(data);
    }
  };

  return { value, onChange, handleSubmit, errorMessage };
};

export default useForm;
