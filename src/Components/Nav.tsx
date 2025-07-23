import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding">
        <ul className="flex justify-between items-center">
          <div>
            <li className="text-2xl font-display font-bold">
              <Link
                to="/"
                className="gradient-text hover:opacity-80 transition-opacity"
              >
                Muhyun Kim
              </Link>
            </li>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  to="/resume"
                  className={`font-medium transition-all duration-300 hover:text-primary-600 ${
                    isActive("/resume")
                      ? "text-primary-600 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className={`font-medium transition-all duration-300 hover:text-primary-600 ${
                    isActive("/project")
                      ? "text-primary-600 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`font-medium transition-all duration-300 hover:text-primary-600 ${
                    isActive("/contact")
                      ? "text-primary-600 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-lg text-gray-700 dark:text-gray-300"
              />
            </button>

            <div className="md:hidden">
              <Link
                to="/nav"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-xl text-gray-700 dark:text-gray-300"
                />
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
