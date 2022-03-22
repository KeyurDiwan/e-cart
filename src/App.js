// // import { Route, Routes, useNavigate } from 'react-router-dom';
// // import './App.css';
// // import Cart from './Components/Cart';
// // import Navbar from './Components/Navbar';
// // import Product from './Components/Product';

// import "./App.css";
// import {Header} from "./components/Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Cart from "./components/Cart";


// /*

   
    
//       <Routes>
       
//         <Route path="/" element={<Product/>}></Route>
      

//         <Route path="/cart/:id" element={<Cart />}></Route>
      
       
   

//       </Routes>
//  */

// // json-server db.json --port 3001 --watch
// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div className="App">
//         {/* <Routes>
         
//            <Route path="/" element={ <Home />} ></Route>
         
     

//        <Route path="/cart" element = { <Cart />}>
         
//         </Route>
//          </Routes> */}
   
       
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Done from "./components/Done";



function App() {
  return (
   <>
      <Header />
       
      <div className="App">
         <Routes>
        <Route path="/" element = {<Home/>}>
        
        </Route>
        <Route path="/cart" element = {  <Cart />}>
        
          </Route>
        <Route path="/done" element = {  <Done />}>
        
          </Route>
          </Routes>
      </div>
      </>
   
  );
}

export default App;

