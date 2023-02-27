import React from "react";

interface Props {
  projectName: string;
  projectDetail: string;
  appLink: string;
  sourceLink: string;
  projectImg: string;
}

function ProjectForm({
  projectName,
  projectDetail,
  appLink,
  sourceLink,
  projectImg,
}: Props) {
  return (
    <div className="flex mt-20 px-20 w-full">
      <div className="flex flex-col w-1/2 pb-4">
        <div className="h-1/2">
          <p className="font-extrabold text-xl mb-2">{projectName}</p>
          <p className=" pr-2">{projectDetail}</p>
        </div>
        <div className="flex flex-col justify-end h-1/2">
          <span>
            <a href={appLink} target="_blank">
              App
            </a>
          </span>
          <span>
            <a href={sourceLink} target="_blank">
              source code
            </a>
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <img src={projectImg} className="w-full" />
      </div>
    </div>
  );
}

export default ProjectForm;
