import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  period?: string | null;
  title: string;
  detail?: string;
  highlights?: string[];
}

function ResumeForm({ period, title, detail, highlights = [] }: Props) {
  return (
    <div className="group relative pl-8 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary-500 rounded-full ring-4 ring-primary-100 dark:ring-primary-900/30 group-hover:scale-125 transition-transform" />
      
      {/* Timeline line */}
      <div className="absolute left-1.5 top-5 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 last:hidden" />
      
      <div className="space-y-2">
        {period && (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faCalendar} className="text-xs" />
            <span>{period}</span>
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        {detail && (
          <p className="text-gray-600 dark:text-gray-400">
            {detail}
          </p>
        )}
        
        {highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-primary-500 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ResumeForm;
