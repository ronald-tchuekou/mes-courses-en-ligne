import React from "react"
import {ProductModel} from "../models";
import {ProductService} from "../services";
import {FolderPlusIcon} from "@heroicons/react/24/outline";
import {Loader} from "./Loader";
import {EmptyContent} from "./EmptyContent";

interface ProductGridProps {
   category: string
   ready: boolean
}

export const ProductGrid = (props: ProductGridProps) => {
   const {category, ready} = props
   
   const [products, setProducts] = React.useState<ProductModel[]>([])
   
   React.useEffect(() => {
      const productService = new ProductService()
      const result = category
         ? productService.getProducts()
            .filter((item) => category === item.category)
         : productService.getProducts()
      setProducts(result)
   }, [category])
   
   if (!ready)
      return <Loader/>
   
   if(ready && products.length === 0)
      return <EmptyContent text={"Pas de produits trouvé"}/>
   
   return (
      <div className={"p-5 grid gap-3 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}>
         {products.map(item => (
            <ProductGridItem
               key={item.id}
               item={item}/>
         ))}
      </div>
   )
}

interface ProductGridItemProps {
   item: ProductModel,
}

const ProductGridItem = (props: ProductGridItemProps) => {
   const {item} = props
   
   const handleAddToCart = React.useCallback(() => {
      // TODO
   }, [])
   
   const handleProductClick = React.useCallback(() => {
      // TODO
   }, [])
   
   return (
      <div className={"transition-all duration-300" +
         " hover:shadow-lg rounded-lg overflow-hidden cursor-default"}>
         <div className={"bg-gray-100 relative"}>
            <img
               src={item.image}
               className={"w-full aspect-square bg-gray-100"}
               alt={item.name}/>
            <button
               onClick={handleAddToCart}
               className={"absolute top-2 left-2 shadow-lg rounded-full bg-indigo-500/30 text-indigo-500 p-2"}>
               <FolderPlusIcon className={"h-6 w-6"}/>
            </button>
         </div>
         <div onClick={handleProductClick} className={"p-3"}>
            <div className={"text-base font-bold text-gray-500 truncate"}>
               {item.name}
            </div>
            <div className={"text-gray-400 text-sm"}>
               {`${item.price}`.replace('.', ',')} XFA
            </div>
         </div>
      </div>
   )
}