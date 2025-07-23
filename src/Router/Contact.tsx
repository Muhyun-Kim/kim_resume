import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLine, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import EmailForm from "../Components/EmailForm";
import PageTitle from "../Components/PageTitle";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "muhyun.kim.dev@gmail.com",
      href: "mailto:muhyun.kim.dev@gmail.com",
      primary: true
    },
    {
      icon: faLine,
      label: "LINE",
      value: "kmh030369",
      href: "#",
      primary: false
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Tokyo, Japan",
      href: "#",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <PageTitle
              title="Contact"
              subtitle="お気軽にご連絡ください"
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="bg-white dark:bg-dark-card rounded-2xl shadow-soft p-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    連絡先
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    プロジェクトのご相談やお仕事のご依頼など、お気軽にお声がけください。
                    できるだけ早めにお返事いたします。
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-lg transition-colors ${
                          item.primary 
                            ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}>
                          <FontAwesomeIcon icon={item.icon} className="text-lg" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {item.label}
                          </h3>
                          {item.href !== "#" ? (
                            <a
                              href={item.href}
                              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      SNS
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                          aria-label={social.label}
                        >
                          <FontAwesomeIcon icon={social.icon} className="text-xl" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    メッセージを送る
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    下記フォームからお気軽にお問い合わせください
                  </p>
                </div>
                
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
