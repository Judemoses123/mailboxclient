import { createSlice } from "@reduxjs/toolkit";

const initialEmailState = {
  sent: [],
  received: [],
};
const EmailSlice = createSlice({
  name: "email",
  initialState: initialEmailState,
  reducers: {
    send(state, action) {
      state.sent = [{ ...action.payload }, ...state.sent];
    },
    getReceivedEmails(state, action) {
      const receivedEmails = [];
      for (let item in action.payload) {
        receivedEmails.unshift({ ...action.payload[item], id: item });
      }
      state.received = receivedEmails;
    },
    getSentEmails(state, action) {
      const sentEmails = [];
      for (let item in action.payload) {
        sentEmails.unshift({ ...action.payload[item], id: item });
      }
      state.sent = sentEmails;
    },
    read(state, action) {
      state.received = state.received.map((mail) => {
        return mail.id === action.payload ? { ...mail, read: true } : mail;
      });
    },
    deleteEmail(state, action) {
      state.received = state.received.filter((email) => {
        return email.id != action.payload;
      });
    },
  },
});
export const { send, getReceivedEmails, getSentEmails, read, deleteEmail } =
  EmailSlice.actions;
export default EmailSlice.reducer;
