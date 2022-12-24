import React from "react";
import {SideBar} from "../components";
import {Outlet} from "react-router-dom";

export const HomeScreen = () => {
   return (
      <main
         className={"flex flex-row h-full w-full"}
         style={{height: 'calc(100vh - 73px)'}}>
         <SideBar/>
         <div className={"w-full h-full flex flex-col"}>
            <div className={"h-full overflow-y-auto"}>
               <Outlet/>
            </div>
         </div>
      </main>
   )
}
