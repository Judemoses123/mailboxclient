import { createSlice } from "@reduxjs/toolkit";

const initialEmailState = {
  sent: [],
  recieved: [],
};
const EmailSlice = createSlice({
  name: "email",
  initialState: initialEmailState,
  reducers: {
    send(state, action) {
      state.sent = [{ ...action.payload }, ...state.sent];
    },
    getRecievedEmails(state, action) {
      const recievedEmails = [];
      for (let item in action.payload) {
        recievedEmails.unshift(action.payload[item]);
      }
      state.recieved = recievedEmails;
    },
  },
});
export const { send, getRecievedEmails } = EmailSlice.actions;
export default EmailSlice.reducer;
