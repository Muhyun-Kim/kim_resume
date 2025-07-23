import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import ProjectForm from "../Components/ProjectForm";
import firstProject from "../assets/firstProject.png";

function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      projectName: "Pair Schedule",
      projectDetail:
        "二人でスケジュールを共有するアプリ。カップルや家族間でのスケジュール管理を簡単にします。",
      appLink: "https://apps.apple.com/jp/app/pair-schedule/id6448741321",
      sourceLink: "https://github.com/Muhyun-Kim/couple_share_schedule",
      projectImg: firstProject,
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    },
  ];

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
            <PageTitle
              title="Projects"
              subtitle="私が開発したプロジェクトとアプリケーション"
            />
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.projectName}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <ProjectForm {...project} />
              </div>
            ))}
          </div>

          {/* プロジェクトがもっとある場合のプレースホルダー */}
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              もっとプロジェクトを追加予定です
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
            >
              GitHubで他のプロジェクトを見る →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
