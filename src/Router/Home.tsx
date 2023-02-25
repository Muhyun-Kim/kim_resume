import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <img src="../profile.png" className="w-3/12 rounded-full" />
        <div className="flex flex-col pl-6 justify-center">
          <span className="mb-8 text-3xl font-extrabold">
            Welcome to my homepage!
          </span>
          <span className="mb-4 text-xl font-extrabold">Simple introduce myself</span>
          <span>現在dbエンジニアとして働いています。</span>
          <span>使用しているdbはoracaleです。</span>
        </div>
      </div>
    </>
  );
}

export default Home;
