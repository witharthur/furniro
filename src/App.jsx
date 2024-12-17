import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";  
import Ranges from "./components/ranges/ranges"
import OurProducts from "./components/ourProducts/ourProducts";
import Carousel from "./components/carousel/carousel"
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";

import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Header />
      <Ranges/>
      <OurProducts/>
      <Carousel/>
      <Gallery/>
      <Footer/>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
