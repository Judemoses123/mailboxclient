import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getRecievedEmails } from "../Reducers/EmailSlice";

const getEmailsAsync = createAsyncThunk(
  "email/getEmailsAsync",
  async (payload, { dispatch, getState }) => {
    try {
      const recipient = getState().auth.email.replace("@", "").replace(".", "");
      console.log(recipient);
      const response = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/recieved.json`
      );
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error("fetch email failed");
      }

      const data = await response.json();
      console.log(data);
      dispatch(getRecievedEmails(data));
    } catch (error) {
      console.log(error);
    }
  }
);
export default getEmailsAsync;
