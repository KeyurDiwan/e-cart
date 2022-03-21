import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Product from './Components/Product';


// json-server db.json --port 3001 --watch
function App() {
  return (
    <>
    

       <Navbar />
    
      <Routes>
       
        <Route path="/" element={<Product/>}></Route>
      

        <Route path="/cart/:id" element={<Cart />}></Route>
      
       
   

      </Routes>
    </>
  );
}

export default App;
