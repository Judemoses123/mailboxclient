import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReceivedEmails } from "../Reducers/EmailSlice";

const getEmailsAsync = createAsyncThunk(
  "email/getEmailsAsync",
  async (payload, { dispatch, getState }) => {
    try {
      const recipient = getState().auth.email.replace("@", "").replace(".", "");

      const response = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/received.json`
      );

      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error("fetch email failed");
      }

      const data = await response.json();
      dispatch(getReceivedEmails(data));

    } catch (error) {
      console.log(error);
    }
  }
);
export default getEmailsAsync;
