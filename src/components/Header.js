import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [clicked, setClicked] = useState("");

  return (
    <div className="flex flex-row flex-none justify-between items-center border-b-2 border-black py-2">
      <Link to="/">
        <h1 className="text-3xl cursor-pointer" onClick={() => setClicked("")}>
          Watch2Gether
        </h1>
      </Link>
      <div>
        <Link to="log-in">
          <button
            className={`btn ${clicked === "log-in" ? "bg-gray-200" : ""}`}
            onClick={() => setClicked("log-in")}
          >
            <span className="pr-1">Sign In</span>
            <FontAwesomeIcon icon={faSignInAlt} />
          </button>
        </Link>
        <Link to="sign-up">
          <button
            className={`btn ${clicked === "sign-up" ? "bg-gray-200" : ""}`}
            onClick={() => setClicked("sign-up")}
          >
            <span className="pr-1">Sign Up</span>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
