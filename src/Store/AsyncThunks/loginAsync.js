import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../Reducers/AuthSlice";
const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload, { dispatch }) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUBjsj9RN6qbQ35KHiY04UO-YWRgiWb4c`,
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
        return { status: "failed", message: "Login failed, Try Again" };
      }
      const data = await response.json();
      dispatch(login(data));
      return { status: "success", message: "Successfully Logged In!" };
    } catch (error) {
      console.log(error);
    }
  }
);
export default loginAsync;