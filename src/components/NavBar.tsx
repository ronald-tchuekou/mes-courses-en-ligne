import React from 'react'
import {BuildingStorefrontIcon} from "@heroicons/react/24/outline";

interface NavBarProp {

}

export const NavBar = (props: NavBarProp) => {
   return (
      <nav className={"flex-none flex flex-row justify-between items-center px-5 sm:px-10 py-4 sm:px-5 bg-indigo-500"}>
         <a
            href={"/"}
            className={"text-yellow-400 text-xl sm:text-2xl font-bold flex items-center gap-3"}>
            <BuildingStorefrontIcon className={"w-10 h-10"}/>
            <span className={"inline"}>Mes courses</span>
         </a>
         <input
            placeholder={"Search..."}
            className={"text-base text-gray-500 px-3 py-2 rounded min-w-[400px]"}/>
      </nav>
   )
}