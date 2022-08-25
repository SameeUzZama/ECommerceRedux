import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Cart from "./Product/Cart";
import ParentProduct from "./Product/ParentProduct";
import ProductDetails from "./Product/ProductDetails";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ParentProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
