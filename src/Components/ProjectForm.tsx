import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCode, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  projectName: string;
  projectDetail: string;
  appLink?: string;
  sourceLink: string;
  projectImg: string;
  technologies?: string[];
}

function ProjectForm({
  projectName,
  projectDetail,
  appLink,
  sourceLink,
  projectImg,
  technologies = [],
}: Props) {
  return (
    <div className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-soft hover:shadow-hard transition-all duration-300 overflow-hidden mb-8 card-hover">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 md:p-10 flex flex-col justify-between order-2 md:order-1">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {projectName}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              {projectDetail}
            </p>
            
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            {appLink && (
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <FontAwesomeIcon icon={faMobileAlt} />
                View App
              </a>
            )}
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <FontAwesomeIcon icon={faGithub} />
              Source Code
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden order-1 md:order-2">
          <div className="aspect-video md:aspect-auto md:h-full">
            <img
              src={projectImg}
              alt={projectName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
