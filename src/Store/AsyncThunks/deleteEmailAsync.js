import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteEmail } from "../Reducers/EmailSlice";
const deleteEmailAsync = createAsyncThunk(
  "email/deleteEmailAsync",
  async (payload, { dispatch, getState }) => {
    console.log(payload);
    try {
      const recipient = String(getState().auth.email)
        .replace("@", "")
        .replace(".", "");
      console.log(recipient);
      const response = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/received/${payload}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        return { status: "failed", message: "Deletion Failed, Try again" };
      }
      const data = await response.json();
      console.log(data);
      dispatch(deleteEmail(payload));
      return{status: "success", message: "Deletion successful" }
    } catch (error) {
      console.log(error);
    }
  }
);
export default deleteEmailAsync;
