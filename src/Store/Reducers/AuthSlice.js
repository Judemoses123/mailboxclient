import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  idToken: "",
  isLoggedIn: false,
  email: "",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {},
    logout(state, action) {},
    signup(state, action) {
      state.isLoggedIn = true;
      state.idToken = action.payload.idToken;
      state.email = action.payload.email;
    },
  },
});
export const { login, logout, signup } = AuthSlice.actions;
export default AuthSlice.reducer;
