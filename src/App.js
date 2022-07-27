import React from "react";
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages";
import Palindrome from "./pages/palindrome";
import Cipher from "./pages/cipher";
import Romanconverter from "./pages/roman_converter";
import Validcellphone from "./pages/valid_cellphone";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/cipher" element={<Cipher />} />
        <Route path="/roman_converter" element={<Romanconverter />} />
        <Route path="/valid_cellphone" element={<Validcellphone />} />
      </Routes>
    </Router>
  );
}

export default App;
