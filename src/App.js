import React from "react";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/simple-mobile-shop" element={<Home />} />
        <Route path="/simple-mobile-shop/about" element={<About />} />
        <Route path="/simple-mobile-shop/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
