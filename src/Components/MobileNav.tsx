import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className="flex justify-end mt-16 w-full">
        <FontAwesomeIcon icon={faXmark} className="text-xl" />
      </div>
      <ul>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default MobileNav;
