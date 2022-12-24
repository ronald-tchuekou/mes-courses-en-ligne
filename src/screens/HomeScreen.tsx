import React from "react";
import {NavBar, ProductGrid, SideBar} from "../components";

export const HomeScreen = () => {
   
   const [category, setCategory] = React.useState<string | null>(null)
   const [ready, setReady] = React.useState<boolean>(false)
   
   React.useEffect(() => {
      if (category !== null)
         setTimeout(() => {
            setReady(true)
         }, 2000)
   }, [category])
   
   return (
      <div className="h-screen w-screen flex flex-col overflow-hidden">
         <NavBar/>
         <main
            className={"flex flex-row h-full w-full"}
            style={{height: 'calc(100vh - 73px)'}}>
            <SideBar onCategoryChange={setCategory}/>
            <div className={"w-full h-full flex flex-col"}>
               <div className={"h-full overflow-y-auto"}>
                  <ProductGrid ready={ready} category={category || ''}/>
               </div>
            </div>
         </main>
      </div>
   )
}
