


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

