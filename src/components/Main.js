import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="flex justify-center flex-col border-2 border-black rounded my-72 mx-auto p-3 max-w-3xl">
      <label className="text-xl pb-2 text-center" htmlFor="roomId">
        Join a Room
      </label>
      <input
        className="border-2 border-black rounded p-3"
        placeholder="Enter Room Id"
        type="text"
        id="roomId"
        name="roomId"
      />
      <h3 className="text-base py-2 text-center">Or</h3>
      <button className="transition duration-200 border-2 border-black rounded mb-2 mr-2 px-3 py-2 hover:bg-gray-200">
        <div>
          <span className="text-xl pr-2">Create a Room</span>
          <FontAwesomeIcon icon={faPlusSquare} size={"lg"} />
        </div>
      </button>
    </div>
  );
};

export default Main;
