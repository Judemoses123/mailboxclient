import { createAsyncThunk } from "@reduxjs/toolkit";
import { signup } from "../Reducers/AuthSlice";

const signupAsync = createAsyncThunk(
  "auth/signupAsync",
  async (payload, { dispatch }) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUBjsj9RN6qbQ35KHiY04UO-YWRgiWb4c`,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const error = await response.json();
        return({status:'failed', message:'Sign Up failed, Try Again'});
        throw new Error("Sign Up Failed!");
      }
      const data = await response.json();
      console.log(data);
      dispatch(signup(data));
      return({status:'success', message:'Successfully Signed Up!'});
    } catch (error) {
      console.log(error);
    }
  }
);
export default signupAsync;
