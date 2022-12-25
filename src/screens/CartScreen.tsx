import React from "react";
import {CartItemModel} from "../models";
import {motion} from "framer-motion";
import {CounterInput, EmptyContent} from "../components";
import {TrashIcon} from "@heroicons/react/24/outline";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {removeFromCart, updateCartItem} from "../features/cart.slice";
import {useNavigate} from "react-router-dom";

interface CartScreenProps {
}

export const CartScreen = (_props: CartScreenProps) => {
   
   const cart = useAppSelector((state) => state.cartReducer.cart)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   
   const handleQuantityChange = React.useCallback((value: number, index: number) => {
      dispatch(updateCartItem({
         index,
         item: {
            product: cart[index].product,
            quantity: value
         }
      }))
   }, [cart, dispatch])
   
   const removeCartItem = React.useCallback((index: number) => {
      dispatch(removeFromCart(index))
   }, [dispatch])
   
   const checkout = React.useCallback(() => {
      navigate("/checkout")
   }, [navigate])
   
   return (
      <main
         className={""}
         style={{height: 'calc(100vh - 73px)'}}>
         <div className={"h-full overflow-y-auto"}>
            <h1 className={"text-lg sm:text-xl text-gray-600 p-4"}>Mon panier</h1>
            <div className={"flex flex-col md:flex-row w-full px-4 pb-4 gap-4"}>
               <div className={"w-full"}>
                  <table className={"table w-full table-auto"}>
                     <thead>
                     <tr>
                        <th>Produit</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th className={"w-12"}></th>
                     </tr>
                     </thead>
                     <tbody>
                     {cart.map((item, i) => (
                        <tr key={i} className={"border-b"}>
                           <td>
                              <img
                                 className={"aspect-square w-[70px] sm:w-[100px] border rounded-md"}
                                 src={item.product.image}
                                 alt={item.product.name}/>
                           </td>
                           <td>{item.product.name}</td>
                           <td>{item.product.price} XFA</td>
                           <td>
                              <CounterInput
                                 quantity={item.quantity}
                                 onQuantityChange={(value: number) => handleQuantityChange(value, i)}/>
                           </td>
                           <td>{item.product.price * item.quantity} XFA</td>
                           <td>
                              <motion.button
                                 whileHover={{scale: 1.1}}
                                 whileTap={{scale: 0.9}}
                                 transition={{type: 'spring', stiffness: 400, damping: 10}}
                                 onClick={() => removeCartItem(i)}
                                 className={"flex-none flex flex-row shadow-md rounded-md bg-red-500/30 text-red-500" +
                                    " p-2"}>
                                 <TrashIcon className={"h-5 w-5"}/>
                              </motion.button>
                           </td>
                        </tr>
                     ))}
                     </tbody>
                  </table>
                  {cart.length === 0 && (
                     <EmptyContent text={"Aucun produit présent dans votre panier"}/>
                  )}
               </div>
               <Coupon checkout={checkout} cart={cart}/>
            </div>
         </div>
      </main>
   )
}

interface CouponProps {
   cart: CartItemModel[]
   checkout: any
}

const Coupon = (props: CouponProps) => {
   const {cart, checkout} = props
   
   const amount = React.useMemo(() => {
      let result = 0
      cart.forEach((item) => {
         result += (item.quantity * item.product.price)
      })
      return result
   }, [cart])
   
   const handleCheckout = React.useCallback(() => {
      checkout()
   }, [checkout])
   
   return (
      <div className={"w-full lg:w-[500px]"}>
         <div className={"w-full bg-gray-100 border rounded-lg"}>
            <div className={"divide-y"}>
               <div className={"px-5 py-2 text-lg font-medium text-gray-500"}>
                  Détail du coupon
               </div>
               <div className={"flex flex-col gap-2 px-5 py-3"}>
                  <div className={"flex flex-row text-gray-400 text-base justify-between"}>
                     <div>Sous-Total :</div>
                     <div className={"text-gray-900 font-semibold"}>
                        {amount} XFA
                     </div>
                  </div>
                  <div className={"flex flex-row text-gray-400 text-base justify-between"}>
                     <div>Frais livraison :</div>
                     <div className={"text-gray-900 font-semibold"}>
                        {amount === 0 ? 0 : 1000} XFA
                     </div>
                  </div>
                  <button className={"text-yellow-500 text-base font-medium text-left"}>
                     {"Ajouter un code coupon >>"}
                  </button>
               </div>
               <div className={"flex flex-col gap-2 px-5 py-3"}>
                  <div className={"flex flex-row text-gray-400 text-base justify-between"}>
                     <div>Total à payer :</div>
                     <div className={"text-gray-900 font-semibold"}>
                        {amount === 0 ? 0 : amount + 1000} XFA
                     </div>
                  </div>
               </div>
            </div>
            <div className={"w-full p-5"}>
               <motion.button
                  disabled={cart.length === 0}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  transition={{type: 'spring', stiffness: 400, damping: 10}}
                  onClick={handleCheckout}
                  className={"shadow-lg rounded-md bg-indigo-500 text-white p-2 text-base w-full" +
                     " disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"}>
                  Valider le paiement
               </motion.button>
            </div>
         </div>
      </div>
   )
}