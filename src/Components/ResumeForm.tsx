import React from "react";

interface Props {
  period: string;
  title: string;
  detail: string;
}

function ResumeForm({ period, title, detail }: Props) {
  return (
    <>
      <div>{period}</div>
      <div className="mb-6 max-md:mb-2">
        <div className="font-extrabold">{title}</div>
        <div>{detail}</div>
      </div>
    </>
  );
}

export default ResumeForm;
