import { useDispatch, useSelector } from "react-redux";

const useMode = () => {
  const mode = useSelector((data) => data.mode);
  const dispatch = useDispatch();

  const changeMode = (e) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_MODE",
      payload: !mode,
    });
  };


  return { changeMode };
};

export default useMode;
