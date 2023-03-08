import React from "react";
import PageTitle from "../Components/PageTitle";
import ProjectForm from "../Components/ProjectForm";

function Project() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 mt-32 max-md:my-16">
        <PageTitle title="Project" />
        {/** first project */}
        <ProjectForm
          projectName={"DRINKER"}
          projectDetail={"カクテルの写真と説明を投稿するアプリ"}
          appLink={"https://muhyun-kim.github.io/drinker_app/"}
          sourceLink={"https://github.com/Muhyun-Kim/drinker_app"}
          projectImg={"../firstProject.png"}
        />
      </div>
    </>
  );
}

export default Project;
