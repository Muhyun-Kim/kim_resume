import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-center mt-32 max-md:flex-col-reverse max-md:items-center max-md:my-16">
        <img src="../profile.png" className="w-3/12 rounded-full max-md:mt-4 max-md:w-11/12" />
        <div className="flex flex-col pl-6 justify-center max-md:pl-0">
          <span className="mb-8 text-3xl font-extrabold max-md:mb-4">
            Welcome to my homepage!
          </span>
          <span className="mb-4 text-xl font-extrabold max-md:mb-1">
            Simple introduce myself
          </span>
          <span>現在dbエンジニアとして働いています。</span>
        </div>
      </div>
    </>
  );
}

export default Home;
