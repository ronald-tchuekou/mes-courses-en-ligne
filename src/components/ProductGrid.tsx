import React from "react"
import {ProductModel} from "../models";
import {ProductService} from "../services";
import {FolderPlusIcon} from "@heroicons/react/24/outline";
import {Loader} from "./Loader";
import {EmptyContent} from "./EmptyContent";
import {motion} from "framer-motion";
import {ProductDetailsModal} from "../modal-components";
import {useParams} from "react-router-dom";

interface ProductGridProps {
   filterQuery: string
   addToCart: any
}

export const ProductGrid = (props: ProductGridProps) => {
   const {filterQuery, addToCart} = props
   
   const params = useParams()
   
   const productDetailsModalRef = React.useRef<any>(null)
   
   const [products, setProducts] = React.useState<ProductModel[]>([])
   const [ready, setReady] = React.useState<boolean>(false)
   
   const getContent = React.useCallback(() => {
      if (filterQuery)
         return products.filter((item) => item
            .name
            .toLowerCase()
            .includes(filterQuery.trim().toLowerCase()) || item
            .description
            .toLowerCase()
            .includes(filterQuery.trim().toLowerCase()))
      return products
   }, [filterQuery, products])
   
   const showProductDetails = React.useCallback((product: ProductModel) => {
      if (productDetailsModalRef.current)
         productDetailsModalRef.current.open(product)
   }, [productDetailsModalRef])
   
   React.useEffect(() => {
      const productService = new ProductService()
      const category = params['category_id']
      
      const result = category
         ? productService.getProducts()
            .filter((item) => category === item.category)
         : productService.getProducts()
      setProducts(result)
      
      setTimeout(() => {
         setReady(true)
      }, 2000)
   }, [params])
   
   if (!ready)
      return <Loader/>
   
   if (ready && products.length === 0)
      return <EmptyContent text={"Pas de produits trouvé"}/>
   
   return (
      <>
         <div className={"p-5 grid gap-3 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}>
            {getContent().map(item => (
               <ProductGridItem
                  addToCart={addToCart}
                  key={item.id}
                  onProductClick={showProductDetails}
                  item={item}/>
            ))}
         </div>
         <ProductDetailsModal
            addToCart={addToCart}
            ref={productDetailsModalRef}/>
      </>
   )
}

interface ProductGridItemProps {
   item: ProductModel,
   onProductClick: any
   addToCart: any
}

const ProductGridItem = (props: ProductGridItemProps) => {
   const {item, onProductClick, addToCart} = props
   
   const handleAddToCart = React.useCallback(() => {
      addToCart({
         product: item,
         quantity: 1
      })
   }, [addToCart, item])
   
   const handleProductClick = React.useCallback(() => {
      onProductClick(item)
   }, [onProductClick, item])
   
   return (
      <motion.div
         whileHover={{scale: 1.1}}
         transition={{type: 'spring', stiffness: 300, damping: 10}}
         className={"rounded-lg overflow-hidden cursor-default transition-all duration-300 border" +
            " hover:border-indigo-500"}>
         <div className={"bg-gray-100 relative border-b"}>
            <img
               onClick={handleProductClick}
               src={item.image}
               className={"w-full aspect-square bg-gray-100"}
               alt={item.name}/>
            <motion.button
               whileHover={{scale: 1.1}}
               whileTap={{scale: 0.9}}
               transition={{type: 'spring', stiffness: 400, damping: 10}}
               onClick={handleAddToCart}
               className={"absolute top-2 left-2 shadow-lg rounded-full bg-indigo-500/30 text-indigo-500 p-2"}>
               <FolderPlusIcon className={"h-6 w-6"}/>
            </motion.button>
         </div>
         <div onClick={handleProductClick} className={"p-3"}>
            <div className={"text-base font-bold text-gray-500 truncate hover:cursor-pointer"}>
               {item.name}
            </div>
            <div className={"text-gray-400 text-sm"}>
               {`${item.price}`.replace('.', ',')} XFA
            </div>
         </div>
      </motion.div>
   )
}