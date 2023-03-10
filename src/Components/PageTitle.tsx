import React from "react";

interface Props{
    title: string;
}

function PageTitle({title}:Props) {
  return (
    <div className="flex w-full px-20 max-md:p-0">
      <span className="self-start font-bold text-3xl">{title}</span>
    </div>
  );
}

export default PageTitle;
