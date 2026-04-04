import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/services/Service";
import Career from "./pages/career/Career";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import JobDescription from "./pages/career/JobDescription";
import RmsaLife from "./pages/career/RmsaLife";

function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/careers/job-description" element={<JobDescription />} />
        <Route path="/careers/life-at-ramsa" element={<RmsaLife />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
