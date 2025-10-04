import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Signin from "./components/Signin/Signin";
import CreateSignin from "./components/Signin/CreateSignin";
import HomePage from "./components/Homepage/Homepage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Products from "./pages/Products";
import AddtoCart from "./components/AddtoCart/AddtoCart";
import { CartProvider } from "./Context/Cart";
import User from "./pages/User";
import { SearchProvider } from "./Context/Search";
import SearchProducts from "./components/SearchProducts/SearchProducts";

const App = () => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const setCart = (item) => {
    setCartItems([...cartItems, { product: item, qty: 1 }]);
  };

  const incQty = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      console.log(cartItem);
      console.log(item);
      if (cartItem.product._id === item) {
        // console.log("test");
        cartItem.qty++;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedItems);
  };

  const decQty = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.product._id === item) {
        cartItem.qty--;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedItems);
  };

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="w-full h-screen">
      <SearchProvider
        value={{ search, setSearch, searchResults, setSearchResults }}
      >
        <CartProvider value={{ cart: cartItems, setCart, incQty, decQty }}>
          <Router>
            <Navbar className="fixed" />
            <Routes>
              <Route path="/signin" element={<Signin />} />
              <Route path="/create" element={<CreateSignin />} />

              <Route path="/" element={<HomePage />} />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/products" element={<Products />} />

              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/searchproduct" element={<SearchProducts />} />

              <Route path="/user/:id" element={<User />} />

              <Route path="/AddtoCart" element={<AddtoCart />} />
            </Routes>
          </Router>
        </CartProvider>
      </SearchProvider>
    </div>
  );
};

export default App;
