import React from 'react';
import {CartScreen, HomeScreen} from "./screens";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {NavBar, ProductGrid} from "./components";
import {CartItemModel} from "./models";

function App() {
   
   const [query, setQuery] = React.useState<string>("")
   const [cart, setCart] = React.useState<CartItemModel[]>([])
   
   const addNewProductToCart = React.useCallback((cartItem: CartItemModel) => {
      setCart(state => {
         let isFind = false
         const result = state.map((item) => {
            if (item.product.id === cartItem.product.id) {
               isFind = true
               return {
                  product: item.product,
                  quantity: item.quantity + cartItem.quantity
               }
            }
            return item
         })
         
         if (!isFind)
            result.push(cartItem)
         
         return result
      })
   }, [setCart])
   
   return (
      <Router>
         <div className="h-screen w-screen flex flex-col overflow-hidden">
            <NavBar
               cart={cart}
               value={query}
               onQueryChange={setQuery}/>
            <Routes>
               <Route
                  path={"/"}
                  element={<HomeScreen/>}>
                  <Route
                     path={"/"}
                     element={<ProductGrid
                        addToCart={addNewProductToCart}
                        filterQuery={query}/>}/>
                  <Route
                     path={":category_id"}
                     element={<ProductGrid
                        addToCart={addNewProductToCart}
                        filterQuery={query}/>}/>
               </Route>
               <Route
                  path={"/cart"}
                  element={<CartScreen
                     cart={cart}
                     setCart={setCart}/>}/>
            </Routes>
         </div>
      </Router>
   );
}

export default App;
