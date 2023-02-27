import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const gitHubClick = () => {
    window.open("https://github.com/Muhyun-Kim");
  };
  const twitterClick = () => {
    window.open("https://twitter.com/Muhyun_Dev");
  };
  return (
    <>
      <ul className="flex justify-between w-11/12 h-24 px-4 border-t-2 items-center fixed bottom-0 z-10 bg-gray-100">
        <li className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPhone} />
          <p>080-8858-2858</p>
        </li>
        <li className="flex flex-col items-center">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>muhyun.kim.dev@gmail.com</p>
        </li>
        <li>
          <p className=" text-sm">Follow Me</p>
          <div className="flex justify-between px-1 w-full">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl"
              onClick={gitHubClick}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl"
              onClick={twitterClick}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Footer;
