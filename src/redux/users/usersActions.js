import { createAction } from "@reduxjs/toolkit";
export const addAllUsers = createAction("addAllUsers");
export { addToCart, removeFromCartByID,toggleCompleted };

const ADDTOCART = "addToCart";
const REMOVEFROMCARTBYID = "removeFromCartByID";
const addToCart = createAction(ADDTOCART);
const removeFromCartByID = createAction(REMOVEFROMCARTBYID);
const toggleCompleted = createAction(
  'toggleCompleted',
);


// export { ADDTOCART, REMOVEFROMCARTBYID  };
