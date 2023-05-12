import React, { useEffect } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { validators } from "../shared/validators";
import TextInput from "../shared/Inputs/TextInput";
import useForm from "../shared/useForm";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepositories, selectUser } from "../redux/features/repositoriesSlice";

const RepositoriesForm = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserRepositories("H-Muradyan"));
  }, []);

  const onSubmit = () => {
    dispatch(getUserRepositories(value.user));
  };

  const { value, onChange, handleSubmit, errorMessage } = useForm(onSubmit, validators);

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
      <button aria-label="search user" type="submit">
        <PersonSearchIcon fontSize="large" />
      </button>
    </form>
  );
};

export default RepositoriesForm;
