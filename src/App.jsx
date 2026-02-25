import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-linear-to-br from-indigo-800 via-purple-900 to-blue-800">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
