import React from 'react'
import {CategoryModel} from "../models";
import {motion} from "framer-motion"
import {Link, useParams} from "react-router-dom";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Transition} from "@headlessui/react";

interface SideBarProps {
}

export const SideBar = (_props: SideBarProps) => {
   const CATEGORIES: CategoryModel[] = [
      {name: 'Légumes', id: 'legumes'},
      {name: 'Fruits', id: 'fruits'},
      {name: 'Produits frais', id: 'produits-frais'},
      {name: 'Épicerie', id: 'epicerie'},
      {name: 'Boissons', id: 'boissons'},
      {name: 'Accessoires', id: 'accessoire'},
      {name: 'Mode', id: 'mode'},
      {name: 'Décoration', id: 'deco'},
      {name: 'Chaussures', id: 'chaussure'},
   ]
   
   const [current, setCurrent] = React.useState<string>('')
   const [isOpen, setIsOpen] = React.useState<boolean>(false)
   const params = useParams()
   
   React.useEffect(() => {
      const value = params['category_id'] ? params['category_id'] : ''
      setCurrent(value)
   }, [params])
   
   return (
      <>
         <Transition
            show={isOpen}
            enter="transition duration-500 transform"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-300 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
            as={'div'}
            className={"fixed sm:hidden top-0 left-0 right-0 bg-white shadow-lg z-20"}>
            <div
               className={"flex-none flex px-5 pb-5 pt-10 flex-col gap-2 w-full"}>
               {CATEGORIES.map(item => (
                  <SideBarItem
                     handleClick={() => setIsOpen(false)}
                     active={current === item.id}
                     item={item}
                     key={item.id}/>
               ))}
            </div>
            {/* Close modal button */}
            <motion.button
               whileHover={{scale: 1.1}}
               whileTap={{scale: 0.9}}
               transition={{type: 'spring', stiffness: 400, damping: 10}}
               onClick={() => setIsOpen(s => !s)}
               className={"absolute top-3 right-3 shadow-lg rounded-full bg-gray-200/30 text-gray-500" +
                  " p-2"}>
               <XMarkIcon className={"h-6 w-6"}/>
            </motion.button>
         </Transition>
         <div className={'px-8 py-5 w-full flex-none sm:hidden'}>
            <motion.button
               onClick={() => setIsOpen(s => !s)}
               whileHover={{scale: 1.05}}
               whileTap={{scale: 0.9}}
               transition={{type: 'spring', stiffness: 400, damping: 10}}
               className={"shadow-lg rounded-md bg-gray-300/30 text-gray-500 flex flex-row items-center gap-3 p-2" +
                  " w-full"}>
               <span className={"block w-full"}>Categories</span>
               <ChevronUpDownIcon className={"h-6 w-6"}/>
            </motion.button>
         </div>
         <aside className={"flex-none hidden sm:flex p-5 w-[250px] bg-gray-200 h-full flex-col gap-2"}>
            {CATEGORIES.map(item => (
               <SideBarItem
                  active={current === item.id}
                  item={item}
                  key={item.id}/>
            ))}
         </aside>
      </>
   )
}

interface SideBarItemProps {
   item: CategoryModel,
   active?: boolean,
   handleClick?: () => void
}

const SideBarItem = (props: SideBarItemProps) => {
   return (
      <motion.div
         whileHover={{scale: 1.05}}
         whileTap={{scale: 0.9}}
         transition={{type: 'spring', stiffness: 300, damping: 10}}>
         <Link
            onClick={props.handleClick}
            to={`${props.item.id}`}
            className={"transition-all duration-300 rounded px-3 py-1 text-base text-gray-400 hover:text-white" +
               ` hover:bg-indigo-400 ${props.active ? 'active' : ''} block w-full`}>
            {props.item.name}
         </Link>
      </motion.div>
   )
}