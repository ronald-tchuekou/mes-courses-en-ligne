import React from 'react';
import {CartScreen, CheckoutScreen, DogsScreen, HomeScreen} from "./screens";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {NavBar, ProductGrid} from "./components";

function App() {
   const [query, setQuery] = React.useState<string>("")
   
   return (
      <Router>
         <div className="h-screen w-screen flex flex-col overflow-hidden">
            <NavBar value={query} onQueryChange={setQuery}/>
            <Routes>
               <Route path={"/"} element={<HomeScreen/>}>
                  <Route path={"/"} element={<ProductGrid filterQuery={query}/>}/>
                  <Route path={":category_id"} element={<ProductGrid filterQuery={query}/>}/>
               </Route>
               <Route path={"/dogs"} element={<DogsScreen/>}/>
               <Route path={"/cart"} element={<CartScreen/>}/>
               <Route path={"/checkout"} element={<CheckoutScreen/>}/>
            </Routes>
         </div>
      </Router>
   );
}

export default App;
