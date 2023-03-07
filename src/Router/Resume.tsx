import React from "react";
import ResumeForm from "../Components/ResumeForm";
import PageTitle from "../Components/PageTitle";

function Resume() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 my-32 max-md:mt-16 max-md:mb-0">
        <PageTitle title="Resume" />
        {/** education */}
        <div className="flex mt-20 border-b-2 px-20 w-full max-md:flex-col max-md:mt-10 max-md:p-0">
          <div className="w-1/2">
            <span className="font-extrabold text-xl">Education</span>
          </div>
          <div className="max-md:mt-4">
            <ResumeForm
              period="2012.03 - 2015.02"
              title=" Kyungpook National University High School"
              detail={null}
            />
            <ResumeForm
              period="2015.04 - 2021.09"
              title="早稲田大学"
              detail="法学部"
            />
          </div>
        </div>
        {/** Experience */}
        <div className="flex mt-8 border-b-2 px-20 w-full max-md:flex-col max-md:mt-2 max-md:p-0">
          <div className="w-1/2">
            <span className="font-extrabold text-xl">Experience</span>
          </div>
          <div className="max-md:mt-4">
            <ResumeForm
              period="2022.04 - 2022.09"
              title="株式会社ディーカナル"
              detail="職種 : 事務"
            />
            <ResumeForm
              period="2015.04 - Present"
              title="株式会社ウェブエッジ"
              detail="職種 : dbエンジニア(oracle)"
            />
          </div>
        </div>
        {/** Experience */}
        <div className="flex mt-8 px-20 w-full max-md:flex-col max-md:mt-2 max-md:p-0">
          <div className="w-1/2">
            <span className="font-extrabold text-xl">Skill</span>
          </div>
          <div className="max-md:mt-4">
            <ResumeForm
              period={null}
              title={null}
              detail="HTML, CSS, JS, TS, React, tailwindCSS"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
