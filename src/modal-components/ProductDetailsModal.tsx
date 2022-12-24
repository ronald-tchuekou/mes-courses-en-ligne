import React, {ForwardedRef, Fragment, useState} from "react";
import {Dialog, Transition} from '@headlessui/react'
import {ProductModel} from "../models";
import {ProductService} from "../services";
import {FolderPlusIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {motion} from "framer-motion";
import {CounterInput} from "../components";

interface ProductDetailsModalProps {
   addToCart: any
}

export const ProductDetailsModal = React.forwardRef(
   (props: ProductDetailsModalProps, ref: ForwardedRef<any>) => {
      const {addToCart} = props
      
      let [isOpen, setIsOpen] = useState<boolean>(false)
      let [product, setProduct] = useState<ProductModel | null>(null)
      let [quantity, setQuantity] = useState<number>(1)
      
      function closeModal() {
         setIsOpen(false)
      }
      
      function openModal(product: ProductModel) {
         setIsOpen(true)
         setProduct(product)
         setQuantity(1)
      }
      
      function handleAddToCart() {
         addToCart({
            product,
            quantity
         })
         closeModal()
      }
      
      React.useEffect(() => {
         const productService = new ProductService()
         setProduct(productService.getProduct('banane'))
      }, [])
      
      React.useImperativeHandle(ref, () => ({
         open: openModal,
         close: closeModal
      }))
      
      return (
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               {/* Modal overlay */}
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black bg-opacity-25"/>
               </Transition.Child>
               {/* Modal container */}
               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-10 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Dialog.Panel
                           className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           {/* Modal title */}
                           <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900">
                              Détails de l'article
                           </Dialog.Title>
                           {/* Modal content */}
                           <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"}>
                              <div className={"bg-gray-100 border"}>
                                 <img
                                    src={product?.image}
                                    className={"w-full aspect-square bg-gray-100"}
                                    alt={product?.name}/>
                              </div>
                              <div className={""}>
                                 <h4 className={"text-base sm:text-lg leading-5 text-gray-700"}>
                                    {product?.name}
                                 </h4>
                                 <p className={"text-sm sm:text-base leading-4 text-gray-500 mt-2"}>
                                    <span>
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam consequatur consequuntur delectus dolore eius et, fuga inventore laudantium, magnam, minus nobis non quas quidem repudiandae suscipit ullam unde?
                                    </span>
                                    <span>
                                       Blanditiis consectetur dolor enim expedita, impedit, iste libero necessitatibus provident quis quo repellat tempore velit? Alias cum doloremque est ex impedit incidunt, labore, libero maxime minus modi natus necessitatibus quis.
                                    </span>
                                 </p>
                                 <div className={"text-base font-medium text-yellow-400 mt-3"}>
                                    {product?.price} XFA
                                 </div>
                                 <div className={"mt-5 flex flex-row justify-between items-center"}>
                                    <CounterInput
                                       quantity={quantity}
                                       onQuantityChange={setQuantity}/>
                                    <motion.button
                                       whileHover={{scale: 1.1}}
                                       whileTap={{scale: 0.9}}
                                       transition={{type: 'spring', stiffness: 400, damping: 10}}
                                       onClick={handleAddToCart}
                                       className={"flex-none flex flex-row shadow-lg rounded-md bg-indigo-500/30" +
                                          " text-indigo-500 p-2 items-center text-base gap-3"}>
                                       <FolderPlusIcon className={"h-6 w-6"}/>
                                       <span className={"block"}>Ajouter au panier</span>
                                    </motion.button>
                                 </div>
                              </div>
                           </div>
                           {/* Close modal button */}
                           <motion.button
                              whileHover={{scale: 1.1}}
                              whileTap={{scale: 0.9}}
                              transition={{type: 'spring', stiffness: 400, damping: 10}}
                              onClick={closeModal}
                              className={"absolute top-3 right-3 shadow-lg rounded-full bg-gray-200/30 text-gray-500" +
                                 " p-2"}>
                              <XMarkIcon className={"h-6 w-6"}/>
                           </motion.button>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      )
   }
)

ProductDetailsModal.displayName = 'ProductDetailsModal'
