import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLine, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/Muhyun-Kim",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: faLine,
      href: "https://line.me/ti/p/JqbdHauzqx",
      label: "LINE",
      color: "hover:text-green-500"
    },
    {
      icon: faTwitter,
      href: "https://twitter.com/Muhyun_Dev",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: faLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/project" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
      <div className="section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold gradient-text mb-4">
                Muhyun Kim
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                フルスタック開発者として、モダンなWebアプリケーションの構築に取り組んでいます。
                新しい技術と挑戦的なプロジェクトを楽しんでいます。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Made with</span>
                <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                クイックリンク
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                連絡先
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Email</p>
                  <a
                    href="mailto:muhyun.kim.dev@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    muhyun.kim.dev@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">SNS</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-sm" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} Muhyun Kim. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span>Tokyo, Japan</span>
                <span>•</span>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
