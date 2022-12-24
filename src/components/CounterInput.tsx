import React from "react"
import {MinusIcon, PlusIcon} from "@heroicons/react/24/outline";
import {motion} from "framer-motion";

interface CounterInputProps {
   quantity: number
   onQuantityChange: any
}

export const CounterInput = (props: CounterInputProps) => {
   const {quantity, onQuantityChange} = props
   
   const [value, setValue] = React.useState<number>(quantity)
   
   function increment() {
      setValue(s => s + 1)
   }
   
   function decrement() {
      setValue(s => s - 1)
   }
   
   React.useEffect(() => {
      if (value !== quantity)
         onQuantityChange(value)
   }, [value, onQuantityChange, quantity])
   
   return (
      <div className={"flex-none flex flex-row gap-2 items-center"}>
         <motion.button
            disabled={value === 1}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: 'spring', stiffness: 400, damping: 10}}
            onClick={decrement}
            className={"flex-none flex flex-row shadow-md rounded-md bg-gray-100 text-gray-500 p-2"}>
            <MinusIcon className={"h-5 w-5"}/>
         </motion.button>
         <input
            value={value}
            readOnly
            className={"w-[80px] h-8 border rounded h-full text-center text-base text-gray-500 font-medium"}/>
         <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: 'spring', stiffness: 400, damping: 10}}
            onClick={increment}
            className={"flex-none flex flex-row shadow-md rounded-md bg-gray-100 text-gray-500 p-2"}>
            <PlusIcon className={"h-5 w-5"}/>
         </motion.button>
      </div>
   )
}
