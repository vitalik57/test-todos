import { createAction } from "@reduxjs/toolkit";
export const addNewComment = createAction("addNewComment");
export const removeFromCommentsByID = createAction("removeFromCommentsByID");
export const toggleCommentsCompleted = createAction(
  'toggleCommentsCompleted',
);

