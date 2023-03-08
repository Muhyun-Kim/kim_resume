import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function MobileNav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-end mt-16 w-full">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-xl"
          onClick={() => navigate(-1)}
        />
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
