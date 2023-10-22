import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthSlice";
const store = configureStore({
  reducer: { auth: AuthReducer },
});

export default store;