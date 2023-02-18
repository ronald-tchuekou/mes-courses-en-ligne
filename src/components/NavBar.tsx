import React from 'react'
import {BuildingStorefrontIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {useAppSelector} from "../app/hooks";

interface NavBarProp {
   value: string
   onQueryChange: any
}

export const NavBar = (props: NavBarProp) => {
   const {value, onQueryChange} = props
   
   const cart = useAppSelector((state) => state.cartReducer.cart)
   
   const handleChange = React.useCallback((e: any) => {
      onQueryChange(e.target.value)
   }, [onQueryChange])
   
   return (
      <nav className={"flex-none flex flex-row justify-between items-center px-5 sm:px-10 py-4 sm:px-5 bg-indigo-500"}>
         <Link
            to={"/"}
            className={"text-yellow-400 text-xl sm:text-2xl font-bold flex items-center gap-1"}>
            <BuildingStorefrontIcon className={"w-10 h-10"}/>
            <span className={"hidden sm:inline"}>Mes courses</span>
         </Link>
         <div className={"flex flex-row gap-3 items-center"}>
            <input
               value={value}
               onChange={handleChange}
               placeholder={"Search..."}
               className={"text-base text-gray-500 px-3 py-2 rounded w-full sm:w-[250px]"}/>
            <Link
               to={"/cart"}
               className={"relative text-gray-300 hover:text-100"}>
               <ShoppingCartIcon className={"w-8 h-8"}/>
               {cart.length !== 0 && (
                  <div className={"absolute top-0 right-0 rounded-full py-[2px] px-[6px] bg-red-500 text-white" +
                     " text-xs shadow"}>
                     {cart.length}
                  </div>
               )}
            </Link>
         </div>
      </nav>
   )
}