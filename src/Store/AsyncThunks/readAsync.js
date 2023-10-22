import { createAsyncThunk } from "@reduxjs/toolkit";
import { read } from "../Reducers/EmailSlice";

const readAsync = createAsyncThunk(
  "email/createAsyncThunk",
  async (payload, { dispatch, getState }) => {
    try {
      const recipient = String(getState().auth.email)
        .replace("@", "")
        .replace(".", "");
      const response = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/recieved/${payload}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            read: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(!response.ok){
        const error= await response.json();
        console.log(error);
        throw new Error('reading failed');
      }

      const data= await response.json();
      console.log(data);
      dispatch(read(payload));

    } catch (error) {
      console.log(error);
    }
  }
);
export default readAsync;
