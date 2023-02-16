import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FreeFire from "./id/FreeFire";
import MobileLegends from "./id/MobileLegends";
import PubgMobile from "./id/PubgMobile";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/MobileLegends" element={<MobileLegends />} />
          <Route path="/FreeFire" element={<FreeFire />} />
          <Route path="/PubgMobile" element={<PubgMobile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}