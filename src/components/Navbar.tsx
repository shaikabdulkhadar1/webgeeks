import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScrolling = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              WebGeeks
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    Our Work
                  </button>
                  <Link
                    to="/about"
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    About
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white px-4 py-2 bg-gray-600 backdrop-blur-sm rounded-md hover:bg-gray-800"
                  >
                    Contact Us
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-900 hover:text-gray-600 px-3 py-2"
                  >
                    About
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white px-4 py-2 bg-gray-600 backdrop-blur-sm rounded-md hover:bg-gray-800"
                  >
                    Contact Us
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {isHomePage ? (
              <>
                <button
                  onClick={() => {
                    scrollToSection("services");
                    setIsOpen(false);
                  }}
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2 w-full text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection("work");
                    setIsOpen(false);
                  }}
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2 w-full text-left"
                >
                  Our Work
                </button>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2"
                >
                  About
                </Link>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsOpen(false);
                  }}
                  className="block bg-gray-600 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-gray-800 mx-2 w-full text-left"
                >
                  Contact Us
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2"
                >
                  About
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white px-4 py-2 bg-gray-600 backdrop-blur-sm rounded-md hover:bg-gray-800"
                >
                  Contact Us
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
