import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import sessionStorageMiddleware from "../utils/sessionStorageMiddleware";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [sessionStorageMiddleware],
});
