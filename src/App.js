import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./pages/notFound";
import HomePage from "./pages/homePage";
import ServicesPage from "./pages/servicesPage";
import PartnershipPage from "./pages/partnershipPage";
import FAQPage from "./pages/faqPage";
import WorkPage from "./pages/workPage";
import LastProject from "./pages/lastProject";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/last-project" element={<LastProject />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/partnerships" element={<PartnershipPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
