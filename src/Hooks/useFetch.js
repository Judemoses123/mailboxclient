import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getEmailsAsync from "../Store/AsyncThunks/getEmailsAsync";

const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmailsAsync());
  }, []);

  setInterval(() => {
    dispatch(getEmailsAsync());
  }, 5000);

  return null;
};
export default useFetch;