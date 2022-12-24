import React from 'react'
import {CategoryModel} from "../models";
import {motion} from "framer-motion"
import {Link, useParams} from "react-router-dom";

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
   const params = useParams()
   
   React.useEffect(() => {
      const value = params['category_id'] ? params['category_id'] : ''
      setCurrent(value)
   }, [params])
   
   return (
      <aside className={"flex-none p-5 w-[250px] bg-gray-200 h-full flex flex-col gap-2"}>
         {CATEGORIES.map(item => (
            <SideBarItem
               active={current === item.id}
               item={item}
               key={item.id}/>
         ))}
      </aside>
   )
}

interface SideBarItemProps {
   item: CategoryModel,
   active?: boolean,
}

const SideBarItem = (props: SideBarItemProps) => {
   return (
      <motion.div
         whileHover={{scale: 1.1}}
         whileTap={{scale: 0.9}}
         transition={{type: 'spring', stiffness: 300, damping: 10}}>
         <Link
            to={`${props.item.id}`}
            className={"transition-all duration-300 rounded px-3 py-1 text-base text-gray-400 hover:text-white" +
               ` hover:bg-indigo-400 ${props.active ? 'active' : ''} block w-full`}>
            {props.item.name}
         </Link>
      </motion.div>
   )
}