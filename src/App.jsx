import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar_ from "./components/Navbar";
import FreeFire from "./id/FreeFire";
import MobileLegends from "./id/MobileLegends";
import PubgMobile from "./id/PubgMobile";
import Beranda from "./pages/Beranda";
import NotFound from "./pages/NotFound";
import Tentang from "./pages/Tentang";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import SignIn from "./auth/SignIn";

export default function App() {
  return (
    <>
      <Router>
        <Navbar_ />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<TermsAndCondition />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/id/MobileLegends" element={<MobileLegends />} />
          <Route path="/id/FreeFire" element={<FreeFire />} />
          <Route path="/id/PubgMobile" element={<PubgMobile />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}