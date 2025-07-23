import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

function PageTitle({ title, subtitle }: Props) {
  return (
    <div className="w-full mb-12 text-center md:text-left animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default PageTitle;
