import { createAsyncThunk } from "@reduxjs/toolkit";
import { send } from "../Reducers/EmailSlice";

const sendAsync = createAsyncThunk(
  "email/sendAsync",
  async (payload, { dispatch }) => {
    try {
      //sending to recipient//
      const recipient = String(payload.recipient)
        .replace("@", "")
        .replace(".", "");
      console.log(recipient);
      const sendresponse = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${recipient}/recieved.json`,
        {
          method: "POST",
          body: JSON.stringify({
            sender: payload.sender,
            recipient: payload.recipient,
            subject: payload.subject,
            text: payload.text,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!sendresponse.ok) {
        const error = await sendresponse.json();
        console.log(error);
        throw new error("Send Failed while storing");
      }

      const senddata = await sendresponse.json();
      console.log(senddata);

      //storing in sent message//
      const sender = String(payload.sender).replace("@", "").replace(".", "");
      console.log(sender);
      const storeresponse = await fetch(
        `https://mail-box-client-reactjs-default-rtdb.firebaseio.com/user/${sender}/sent.json`,
        {
          method: "POST",
          body: JSON.stringify({
            sender: payload.sender,
            recipient: payload.recipient,
            subject: payload.subject,
            text: payload.text,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!storeresponse.ok) {
        const error = await storeresponse.json();
        console.log(error);
        throw new Error("Send Failed while storing");
      }

      const storedata = await storeresponse.json();
      console.log(storedata);

      dispatch(send(payload));
    } catch (error) {
      console.log(error);
    }
  }
);
export default sendAsync;
