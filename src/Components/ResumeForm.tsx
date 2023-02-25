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
      <div>
        <div>{title}</div>
        <div>{detail}</div>
      </div>
    </>
  );
}

export default ResumeForm;
