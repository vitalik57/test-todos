import { createReducer } from "@reduxjs/toolkit";
import { addAllUsers ,addToCart,removeFromCartByID,toggleCompleted} from "./usersActions";
export const userReducer = createReducer([], {
  [addAllUsers]: (_, action) => action.payload,
   [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCartByID]: (state, action) => [...state.filter(cartItem => cartItem.id !== action.payload)],
    [toggleCompleted]:(state, { payload }) =>
    
    
    
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});
