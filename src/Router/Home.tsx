import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = ["React", "TypeScript", "Node.js", "Database", "AWS", "Python"];

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-padding w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 text-center md:text-left transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-2">
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  Full Stack Developer
                </p>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
                  Hi, I'm{" "}
                  <span className="gradient-text">Muhyun Kim</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                現在DBエンジニアとして働いています。
                フルスタック開発者として、モダンなWebアプリケーションの構築に情熱を注いでいます。
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-500 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <Link
                  to="/project"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Projects
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>

              <div className="flex gap-4 pt-2 justify-center md:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl text-gray-700 dark:text-gray-300"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl text-gray-700 dark:text-gray-300"
                  />
                </a>
                <a
                  href="mailto:email@example.com"
                  className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-2xl text-gray-700 dark:text-gray-300"
                  />
                </a>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative z-10">
                <img
                  src={profileImg}
                  alt="Muhyun Kim"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
