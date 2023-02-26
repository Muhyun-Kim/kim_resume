import React from "react";
import ResumeForm from "../Components/ResumeForm";

function Resume() {
  return (
    <>
      <div className="flex flex-col items-center w-4/5 mt-32">
        <span className="self-start font-bold text-3xl">Resume</span>
        <div className="flex justify-between mt-20 w-full">
          <div>
            <span className=" font-extrabold text-xl">Education</span>
          </div>
          <div>
            <ResumeForm
              period="2012.03-2015.02"
              title=" Kyungpook National University High School"
              detail={null}
            />
            <ResumeForm
              period="2015.04-2021.09"
              title="Waseda University(bachelor's degree)"
              detail="Department of Law"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
