import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHome, faFileAlt, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const menuItems = [
    { path: "/", label: "Home", icon: faHome },
    { path: "/resume", label: "Resume", icon: faFileAlt },
    { path: "/project", label: "Projects", icon: faProjectDiagram },
    { path: "/contact", label: "Contact", icon: faEnvelope },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => navigate(-1)}
      />
      
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark-bg shadow-2xl transform transition-transform duration-300 animate-slide-in-right">
        <div className="p-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl text-gray-700 dark:text-gray-300"
            />
          </button>

          <div className="mt-20">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 dark:text-primary-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-lg w-5" />
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              <p className="gradient-text font-display font-semibold text-lg mb-2">
                Muhyun Kim
              </p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
