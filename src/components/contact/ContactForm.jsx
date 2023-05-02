import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TextInput from "../shared/Inputs/TextInput";
import TextareaInput from "../shared/Inputs/TextareaInput";
import useForm from "../shared/useForm";
import { validators } from "../shared/validators";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = () => {
    alert(JSON.stringify(value, undefined, 2))
  };

  const { value, onChange, handleSubmit, errorMessage } = useForm(onSubmit, validators, data);

  return (
    <>
      <h4 className="text-2xl mb-5 text-center lg:text-start font-bold">Contact me</h4>
      <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Name"
          name="name"
          errorMessage={errorMessage}
        />
        <TextInput
          value={value}
          onChange={onChange}
          type="email"
          placeholder="email"
          name="email"
          errorMessage={errorMessage}
        />
        <TextareaInput
          value={value}
          onChange={onChange}
          rows={3}
          placeholder="Message"
          name="message"
          errorMessage={errorMessage}
        />
        <button type="submit" className="bg-blue-900 py-2 flex justify-center space-x-3">
          <span className="text-white">SEND</span> <SendIcon className="text-white"/>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
