import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-black py-2">
      <h1 className="text-3xl">Watch2Gether</h1>
      <div>
        <button className="transition duration-200 border-2 border-black rounded mr-2 px-3 py-2 hover:bg-gray-200">
          <div>
            <span className="pr-1">Sign In</span>
            <FontAwesomeIcon icon={faSignInAlt} />
          </div>
        </button>
        <button className="transition duration-200 border-2 border-black rounded ml-2 px-3 py-2 hover:bg-gray-200">
          <span className="pr-1">Sign Up</span>
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </div>
    </div>
  );
};

export default Header;
