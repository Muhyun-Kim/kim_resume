import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ResumeForm from "../Components/ResumeForm";
import PageTitle from "../Components/PageTitle";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    Frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    Mobile: ["Flutter"],
    Backend: ["Node.js", "Express", "Go", "Echo"],
    Database: ["MySQL", "Firebase"],
    DevOps: ["Docker", "Git"],
    Others: ["Redmine"],
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <PageTitle title="Resume" subtitle="私の経歴とスキルセット" />
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center md:justify-end mb-12">
            <button className="btn-primary inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faDownload} />
              Download PDF
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Education Section */}
            <div
              className={`md:col-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white dark:bg-dark-card rounded-2xl shadow-soft p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-xl text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Education
                  </h2>
                </div>
                <div className="space-y-0">
                  <ResumeForm
                    period="2012.03 - 2015.02"
                    title="Kyungpook National University High School"
                  />
                  <ResumeForm
                    period="2015.04 - 2021.09"
                    title="早稲田大学"
                    detail="法学部"
                    highlights={[
                      "国際法専攻",
                      "GPA: 3.8/4.0",
                      "プログラミングサークル活動",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div
              className={`md:row-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="bg-white dark:bg-dark-card rounded-2xl shadow-soft p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-xl text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Skills
                  </h2>
                </div>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div
              className={`md:col-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="bg-white dark:bg-dark-card rounded-2xl shadow-soft p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-xl text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    Experience
                  </h2>
                </div>
                <div className="space-y-0">
                  <ResumeForm
                    period="2022.04 - 2022.09"
                    title="株式会社ディーカナル"
                    detail="職種: 事務"
                    highlights={[
                      "業務プロセスの改善と自動化",
                      "新しい人材管理システムの導入",
                    ]}
                  />
                  <ResumeForm
                    period="2022.10 - 2023.09"
                    title="株式会社ウェブエッジ"
                    detail="職種: 基盤運用保守エンジニア"
                    highlights={["SQL作成", "金融システムのジョブ管理"]}
                  />
                  <ResumeForm
                    period="2024.10 - Present"
                    title="株式会社dual&Co."
                    detail="職種: フロント・バックエンドエンジニア"
                    highlights={[
                      "フロントエンド開発(NextJs, TypeScript, Material UI)",
                      "バックエンド開発(Go, Echo, MySQL)",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
