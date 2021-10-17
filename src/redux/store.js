import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { comentReducer } from "./comments/commentsReducer";
import { userReducer } from "./users/userReducer";
export const store = configureStore({
  reducer: {
    users: userReducer,
    comments: comentReducer
  }
});
