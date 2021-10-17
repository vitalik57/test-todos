import { createReducer } from "@reduxjs/toolkit";
import { addAllComments, addNewComment } from "./commentsActions";

export const comentReducer = createReducer([], {
  [addAllComments]: (_, { payload }) => payload,
  [addNewComment]: (state, { payload }) => [...state, payload]
});
