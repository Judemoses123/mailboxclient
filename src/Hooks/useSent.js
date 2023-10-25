import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getSentEmailAsync from "../Store/AsyncThunks/getSentEmailAsync";
const useSent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSentEmailAsync());
  }, []);
};
export default useSent;
