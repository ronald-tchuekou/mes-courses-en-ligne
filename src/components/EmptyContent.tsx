import React from "react";
import {InboxStackIcon} from "@heroicons/react/24/outline";

interface EmptyContentProps {
   text: string
}

export const EmptyContent = (props: EmptyContentProps) => {
   const {text} = props
   
   return (
      <div className={"h-full w-full flex flex-col gap-5 justify-center items-center min-h-[200px]"}>
         <InboxStackIcon className={`h-20 w-20 text-gray-300`}/>
         <div className={"max-w-[300] w-full px-5 text-center text-gray-400 text-base"}>
            {text}
         </div>
      </div>
   )
}