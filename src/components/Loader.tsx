import React from "react";
import {ArrowPathIcon} from "@heroicons/react/24/outline";

interface LoaderProps {
   size?: "large" | "medium" | "small"
}

export const Loader = (props: LoaderProps) => {
   const {size = "large"} = props
   
   return (
      <div className={"h-full w-full flex justify-center items-center min-h-[200px] text-yellow-400"}>
         <ArrowPathIcon className={`animate-spin ${
            size === "large"
               ? "w-12 h-12"
               : size === "medium"
                  ? "w-8 h-8"
                  : "w-5 h-5"
         }`}/>
      </div>
   )
}