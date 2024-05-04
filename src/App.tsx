import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Gallaries from "./components/galleries/Galleries";
import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import ImageDetails from "./components/imageDetails/ImageDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallaries />} />
      <Route path="/category" element={<Category />} />
      <Route path="/image-details/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default App;
