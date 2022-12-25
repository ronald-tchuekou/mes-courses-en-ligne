import React from "react";
import {motion} from "framer-motion";
import {UserModel} from "../models";

interface CheckoutScreenProps {
}

export const CheckoutScreen = (_props: CheckoutScreenProps) => {
   
   const [formData, setFormData] = React.useState<UserModel>({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      postal_code: "",
      city: "",
   })
   const [errors, setErrors] = React.useState<string[]>([])
   
   const handleChange = React.useCallback((e: any) => {
      const key = e.target.name
      const value = e.target.value
      setFormData(state => ({
         ...state,
         [key]: value
      }))
   }, [setFormData])
   
   const validate = React.useCallback(()  => {
      const err = []
      if(formData.firstname.trim() === "")
         err.push("Veuillez indiquer votre nom.")
      if(formData.lastname.trim() === "")
         err.push("Veuillez indiquer votre prénom.")
      if(formData.email.trim() === "")
         err.push("Veuillez indiquer votre adresse email.")
      if(formData.postal_code.trim() === "")
         err.push("Veuillez indiquer votre code postal.")
      if(formData.city.trim() === "")
         err.push("Veuillez indiquer votre ville.")
      setErrors(err)
      
      return err.length === 0
   }, [formData, setErrors])
   
   const submit = React.useCallback((e: any) => {
      e.preventDefault()
      
      if(!validate())
         return;
      
      console.log(formData)
   }, [formData, validate])
   
   return (
      <main
         className={""}
         style={{height: 'calc(100vh - 73px)'}}>
         <div className={"h-full overflow-y-auto py-5 sm:py-10"}>
            <form
               action={""}
               onSubmit={submit}
               className={"max-w-[700px] w-full mx-auto"}>
               <h1 className={"text-lg sm:text-xl text-gray-600 p-4"}>Paiement</h1>
               {errors.length > 0 && <Errors errors={errors}/>}
               <div className={"grid grid-cols-1 md:grid-cols-2 w-full px-4 pb-4 gap-4"}>
                  <div>
                     <Input
                        name={"firstname"}
                        label={"Prénom"}
                        value={formData.firstname}
                        onChange={handleChange}/>
                  </div>
                  <div>
                     <Input
                        name={"lastname"}
                        label={"Nom"}
                        value={formData.lastname}
                        onChange={handleChange}/>
                  </div>
                  <div className={"md:col-span-2"}>
                     <Input
                        name={"email"}
                        label={"Adresse email"}
                        value={formData.email}
                        onChange={handleChange}/>
                  </div>
                  <div className={"md:col-span-2"}>
                     <Input
                        name={"address"}
                        label={"Adresse"}
                        value={formData.address}
                        onChange={handleChange}/>
                  </div>
                  <div>
                     <Input
                        name={"postal_code"}
                        label={"Code postal"}
                        value={formData.postal_code}
                        onChange={handleChange}/>
                  </div>
                  <div>
                     <Input
                        name={'city'}
                        label={"Ville"}
                        value={formData.city}
                        onChange={handleChange}/>
                  </div>
               </div>
               <div className={"w-full p-4"}>
                  <motion.button
                     disabled={false}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: 0.9}}
                     transition={{type: 'spring', stiffness: 400, damping: 10}}
                     type={"submit"}
                     className={"shadow-lg rounded-md bg-indigo-500 text-white p-2 text-base w-full" +
                        " disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"}>
                     Confirmer
                  </motion.button>
               </div>
            </form>
         </div>
      </main>
   )
}

interface InputProps {
   label: string
   name: string
   value: string
   onChange: any
}

const Input = (props: InputProps) => {
   const {label, name, value, onChange} = props
   
   return (
      <div className={"w-full"}>
         <label className={"text-base text-gray-500 py-1"} htmlFor={name}>
            {label}
         </label>
         <input
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            className={"w-full border rounded-md px-4 py-2 text-base"}/>
      </div>
   )
}

interface ErrorsProps {
   errors: string[]
}

const Errors = (props: ErrorsProps) => {
   const {errors} = props
   
   return (
      <div className={"p-4"}>
         <div className={"w-full border border-red-500 bg-red-500/20 rounded-md p-2"}>
            <div className={"text-base text-red-500 font-bold"}>Erreurs</div>
            <ul className={"px-2 text-base text-red-500"}>
               {errors.map((item) => <li key={item}>{item}</li>)}
            </ul>
         </div>
      </div>
   )
}
