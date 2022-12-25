import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "../features/cart.slice";
import {dogsApiSlice} from "../features/dogs-api.slice";
import ENV from "../utils/env";
import {CartItemModel} from "../models";

const getStorageCart = () => {
   const result: CartItemModel[] = JSON.parse(localStorage.getItem(ENV.CART_KEY) || "[]")
   return {
      cartReducer: {
         cart: result
      }
   }
}

export const store = configureStore({
   reducer: {
      cartReducer: cartSlice,
      [dogsApiSlice.reducerPath]: dogsApiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(dogsApiSlice.middleware)
   },
   preloadedState: getStorageCart()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>