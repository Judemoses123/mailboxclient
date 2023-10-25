import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSentEmails } from "../Reducers/EmailSlice";

const getSentEmailAsync = createAsyncThunk(
  "email/getSentEmailAsync",
  async (payload, { dispatch, getState }) => {
    try {
        const recipient = getState().auth.email.replace("@", "").replace(".", "");
  
        const response = await fetch(
          `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/sent.json`
        );
  
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          throw new Error("fetch email failed");
        }
  
        const data = await response.json();
        dispatch(getSentEmails(data));
  
      } catch (error) {
        console.log(error);
      }
    }
);
export default getSentEmailAsync;
