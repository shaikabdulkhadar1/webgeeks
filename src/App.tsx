import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AllWorks from "./pages/AllWorks";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen">
                <Navbar />
                <Hero />
                <Services />
                <Work />
                <Testimonials />
                <Contact />
              </div>
            }
          />
          <Route
            path="/works"
            element={
              <>
                <Navbar />
                <AllWorks />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Contact />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
