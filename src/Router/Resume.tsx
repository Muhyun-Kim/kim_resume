import React from "react";
import ResumeForm from "../Components/ResumeForm";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div>
        <div>
          <h3>Education</h3>
        </div>
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
    </>
  );
}

export default Resume;
