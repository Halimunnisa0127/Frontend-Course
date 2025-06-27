
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  
  return (
   <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

