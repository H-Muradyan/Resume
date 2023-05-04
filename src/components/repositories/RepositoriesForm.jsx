import React, { useEffect, useState } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { validators } from "../shared/validators";
import TextInput from "../shared/Inputs/TextInput";
import useForm from "../shared/useForm";
import useRepositories from "../redux/actions/useRepositories";

const RepositoriesForm = () => {
  const [data, setData] = useState({
    user: "",
  });


  const { getUserRepositories } = useRepositories();

  useEffect(() => {
    getUserRepositories("H-Muradyan");
  }, []);

  const onSubmit = () => {
    getUserRepositories(value.user)
  };

  const { value, onChange, handleSubmit, errorMessage } = useForm(onSubmit, validators, data);

  return (
    <form className="h-16 flex space-x-5 items-start justify-center" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find by nickname"
        name="user"
        errorMessage={errorMessage}
      />
      <button  aria-label="search user" type="submit">
        <PersonSearchIcon fontSize="large" />
      </button>
    </form>
  );
};

export default RepositoriesForm;
