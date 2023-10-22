import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthSlice";
import EmailReducer from "./Reducers/EmailSlice";
const store = configureStore({
  reducer: { auth: AuthReducer, email: EmailReducer },
});

export default store;
