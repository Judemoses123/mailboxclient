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
      state.sent = [{...action.payload}, ...state.sent];
    },
    get(state, action) {},
  },
});
export const { send, get } = EmailSlice.actions;
export default EmailSlice.reducer;
