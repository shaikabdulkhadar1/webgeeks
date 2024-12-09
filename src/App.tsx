import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ShapeProvider } from "./context/ShapeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AllWorks from "./pages/AllWorks";
import About from "./pages/About";

const ScrollToContact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ShapeProvider>
        <ScrollToContact />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen">
                  <Navbar />
                  <Suspense fallback={null}>
                    <Hero />
                    <Services />
                    <Work />
                    <Testimonials />
                    <Contact />
                  </Suspense>
                </div>
              }
            />
            <Route
              path="/works"
              element={
                <>
                  <Navbar />
                  <Suspense fallback={null}>
                    <AllWorks />
                    <Contact />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <Suspense fallback={null}>
                    <About />
                    <Contact />
                  </Suspense>
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </ShapeProvider>
    </Router>
  );
}

export default App;
