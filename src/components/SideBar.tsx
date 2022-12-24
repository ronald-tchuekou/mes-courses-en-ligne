import React from 'react'
import {CategoryModel} from "../models";

interface SideBarProps {
   onCategoryChange: any
}

export const SideBar = (props: SideBarProps) => {
   const {onCategoryChange} = props
   
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
   
   React.useEffect(() => {
      const slugs = window.location.pathname.split('/')
      const value = slugs.length > 1 ? slugs[1] : ''
      setCurrent(value)
      onCategoryChange(value)
   }, [onCategoryChange])
   
   return (
      <aside className={"flex-none p-5 w-[250px] bg-gray-200 h-full flex flex-col gap-2"}>
         {CATEGORIES.map(item => (
            <SideBarItem
               active={current === item.id}
               onClick={setCurrent}
               item={item}
               key={item.id}/>
         ))}
      </aside>
   )
}

interface SideBarItemProps {
   item: CategoryModel,
   active?: boolean,
   onClick?: any
}

const SideBarItem = (props: SideBarItemProps) => {
   
   const handleClick = React.useCallback(() => {
      props.onClick(props.item.id)
   }, [props])
   
   return (
      <a
         onClick={handleClick}
         href={`/${props.item.id}`}
         className={"transition-all duration-300 rounded px-3 py-1 text-base text-gray-400 hover:text-white" +
            ` hover:bg-indigo-400 ${props.active ? 'active' : ''}`}>
         {props.item.name}
      </a>
   )
}