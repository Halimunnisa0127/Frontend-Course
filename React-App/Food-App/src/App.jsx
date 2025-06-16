import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import RestaurantList from './Components/RestaurantList/RestaurantList';
import RestaurantDetails from './Components/RestaurantDetails/RestaurantDetails';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import SearchResults from './Components/SearchResult/SearchResults';
import Footer from './Components/Footer/Footer';


function App() {

  <div className="App">
    <Login />
  </div>
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prev) => prev.filter(item => item.id !== itemToRemove.id));
  };
  return (
    <BrowserRouter>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurantlist/:category" element={<RestaurantList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/restaurantdetails/:id" element={<RestaurantDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/checkout" element={<CheckOut />} />
        \
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
