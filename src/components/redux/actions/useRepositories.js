import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userRepositories } from "../../api/repositories";

const useRepositories = () => {
  const dispatch = useDispatch();

  const getUserRepositories = async (user) => {
    try {
      const res = await userRepositories(user);
      if (res.data) {
        dispatch({
          type: "GET_REPOSITORIES",
          payload: res.data,
        });
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return { getUserRepositories };
};

export default useRepositories;
