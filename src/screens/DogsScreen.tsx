import React from "react"
import {EmptyContent, Loader} from "../components";
import {Breed, useFetchBreedsQuery} from "../features/dogs-api.slice";

export const DogsScreen = () => {
   
   const [dogNum, setDogNum] = React.useState<number>(10)
   
   const {data = [], isFetching} = useFetchBreedsQuery(dogNum)
   
   if (isFetching)
      return <Loader/>
   
   if (!isFetching && data.length === 0)
      return <EmptyContent text={"Empty dogs"}/>
   
   return (
      <main
         className={""}
         style={{height: 'calc(100vh - 73px)'}}>
         <div className={"h-full overflow-y-auto"}>
            <div className={"flex flex-row items-center justify-between"}>
               <h1 className={"text-lg sm:text-xl text-gray-600 p-4"}>
                  Dogs API
               </h1>
               <div className={"flex flex-row items-center gap-2 px-4"}>
                  <div className={"text-base"}>Limit :</div>
                  <select
                     name="dogNum"
                     id="dogNum"
                     value={dogNum}
                     onChange={(e) => setDogNum(Number(e.target.value))}>
                     <option value="5">5</option>
                     <option value="10">10</option>
                     <option value="15">15</option>
                     <option value="20">20</option>
                     <option value="25">25</option>
                     <option value="30">30</option>
                  </select>
               </div>
            </div>
            <div className={"flex flex-col md:flex-row w-full px-4 pb-4 gap-4"}>
               <div className={"w-full"}>
                  <table className={"table table-auto"}>
                     <thead>
                     <tr>
                        <th>image</th>
                        <th>Name</th>
                     </tr>
                     </thead>
                     <tbody>
                     {data.map((item: Breed) => (
                        <tr key={item.id} className={"border-b"}>
                           <td>
                              <img
                                 className={"aspect-square w-[70px] sm:w-[100px] border rounded-md"}
                                 src={item.image.url}
                                 alt={item.name}/>
                           </td>
                           <td className={"px-3"}>{item.name}</td>
                        </tr>
                     ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </main>
   )
}