import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Testimonial from "../src/components/Testimonial";
import Blog from "../src/components/Blog";
// import QuickLinks from "../src/components/QuickLinks";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
