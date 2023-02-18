import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {CartItemModel} from "../models";
import ENV from "../utils/env";

interface CartState {
   cart: CartItemModel[]
}

const initialState: CartState = {
   cart: []
}

const addCartToStorage = (cart: CartItemModel[]) => {
   localStorage.setItem(ENV.CART_KEY, JSON.stringify(cart))
}

const removeCartFromStorage = () => {
   localStorage.removeItem(ENV.CART_KEY)
}

const cartSlice = createSlice({
   name: "cartSlice",
   initialState,
   reducers: {
      addToCart(state: CartState, action: PayloadAction<CartItemModel>) {
         let isFind = false
         const result = state.cart.map((item) => {
            if (item.product.id === action.payload.product.id) {
               isFind = true
               return {
                  product: item.product,
                  quantity: item.quantity + action.payload.quantity
               }
            }
            return item
         })
         
         if (!isFind)
            result.push(action.payload)
         
         state.cart = result
         
         // Storage
         addCartToStorage(state.cart)
      },
      removeFromCart(state: CartState, action: PayloadAction<number>) {
         state.cart = [
            ...state.cart.slice(0, action.payload),
            ...state.cart.slice(action.payload + 1)
         ]
         
         // Storage
         addCartToStorage(state.cart)
      },
      updateCartItem(state: CartState, action: PayloadAction<{ item: CartItemModel, index: number }>) {
         state.cart = [
            ...state.cart.slice(0, action.payload.index),
            action.payload.item,
            ...state.cart.slice(action.payload.index + 1)
         ]
         
         // Storage
         addCartToStorage(state.cart)
      },
      resetCart(state: CartState) {
         state.cart = []
         
         // Storage
         removeCartFromStorage()
      }
   }
})

export const {addToCart, removeFromCart, updateCartItem, resetCart} = cartSlice.actions
export default cartSlice.reducer

