import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const lineClick = () => {
    window.open("https://line.me/ti/p/JqbdHauzqx");
  };
  const gitHubClick = () => {
    window.open("https://github.com/Muhyun-Kim");
  };
  const twitterClick = () => {
    window.open("https://twitter.com/Muhyun_Dev");
  };
  return (
    <>
      <ul className="flex justify-between w-11/12 h-24 px-4 border-t-2 items-center fixed bottom-0 z-10 bg-gray-100 max-md:mt-6 max-md:h-12">
        <li className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faLine}
            className="text-2xl max-md:text-xl"
            onClick={lineClick}
          />
        </li>
        <li className="flex flex-col items-center max-md:items-start">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <p className="max-md:hidden">muhyun.kim.dev@gmail.com</p>
        </li>
        <li>
          <p className="text-sm max-md:hidden">Follow Me</p>
          <div className="flex justify-between px-1 w-full">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl max-md:text-xl"
              onClick={gitHubClick}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl max-md:hidden"
              onClick={twitterClick}
            />
          </div>
        </li>
        <li className="md:hidden">
          <FontAwesomeIcon
            icon={faTwitter}
            className="max-md:text-xl"
            onClick={twitterClick}
          />
        </li>
      </ul>
    </>
  );
}

export default Footer;
