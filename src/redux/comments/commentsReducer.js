import { createReducer } from "@reduxjs/toolkit";
import { removeFromCommentsByID, addNewComment,toggleCommentsCompleted } from "./commentsActions";
  // [addToCart]: (state, action) => [...state, action.payload],
export const comentReducer = createReducer([], {
  [addNewComment]: (state, action) => [...state, action.payload],
  [removeFromCommentsByID]: (state, action) => [...state.filter(cartItem => cartItem.id !== action.payload)],
    [toggleCommentsCompleted]:(state, { payload }) =>
     state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});
