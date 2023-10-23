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
export const { send, getReceivedEmails, read, deleteEmail } =
  EmailSlice.actions;
export default EmailSlice.reducer;
