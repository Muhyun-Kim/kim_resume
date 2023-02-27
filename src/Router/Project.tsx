import React from "react";
import PageTitle from "../Components/PageTitle";

function Project() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 my-32">
        <PageTitle title="Project" />
        {/** first project */}
        <div className="flex mt-20 border-b-2 px-20 w-full">
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default Project;
