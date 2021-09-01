import React from "react";
import { Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <div className="flex justify-center flex-grow w-full">
      <div className="border-2 border-black rounded my-auto p-3 h-full">
        <form className="flex flex-col justify-center align-middle">
          <Route path="/" exact>
            <label className="text-xl pb-2 text-center" htmlFor="roomId">
              Join a Room
            </label>
            <div className="w-full">
              <input
                className="w-auto border-2 border-black rounded rounded-r-none p-3"
                placeholder="Enter Room Id"
                type="text"
                id="roomId"
                name="roomId"
              />
              <button className="w-auto bg-white cursor-pointer transition duration-200 border-2 border-l-0 rounded-l-none border-black rounded p-3 hover:bg-gray-200">
                Join Room
              </button>
            </div>
            <h3 className="text-base py-2 text-center">Or</h3>
            <button className="transition duration-200 border-2 border-black rounded mb-2 px-3 py-2 hover:bg-gray-200">
              <span className="text-xl pr-2">Create a Room</span>
              <FontAwesomeIcon icon={faPlusSquare} size={"lg"} />
            </button>
          </Route>
          <Route path="/log-in">
            <p className="text-center text-xl pb-3">Sign In</p>
            <input
              className="border-2 border-black rounded rounded-r-none p-3 mb-2"
              placeholder="Email"
              type="text"
              id="email"
              name="email"
            />
            <input
              className="border-2 border-black rounded rounded-r-none p-3 mb-2"
              placeholder="Password"
              type="text"
              id="password"
              name="password"
            />
            <button className="bg-gray-200 cursor-pointer transition duration-200 border-2 border-black rounded p-3 hover:bg-gray-300 mb-3">
              Enter
            </button>
            <p className="text-center text-base pb-3">Or Sign In with</p>
            <div className="mx-auto">
              <button className="btn">
                <span className="pr-1">Google</span>
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="btn">
                <span className="pr-1">Facebook</span>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </Route>
          <Route path="/sign-up">
            <p className="text-center text-xl pb-3">Sign Up</p>
            <input
              className="border-2 border-black rounded rounded-r-none p-3 mb-2"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
            />
            <input
              className="border-2 border-black rounded rounded-r-none p-3 mb-2"
              placeholder="Email"
              type="text"
              id="email"
              name="email"
            />
            <input
              className="border-2 border-black rounded rounded-r-none p-3 mb-2"
              placeholder="Password"
              type="text"
              id="password"
              name="password"
            />
            <div className="flex flex-row justify-between mb-2 w-auto">
              <p>Gender</p>
              <div className="ml-4">
                <input
                  className="mr-1"
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                />
                <label className="mr-2" for="male">
                  Male
                </label>
                <input
                  className="mr-1"
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                />
                <label className="mr-2" for="female">
                  Female
                </label>
                <input
                  className="mr-1"
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                />
                <label className="mr-2" for="other">
                  Other
                </label>
                <input
                  className="mr-1"
                  type="radio"
                  id="prefer-not"
                  name="gender"
                  value="Prefer Not To Say"
                />
                <label for="prefer-not">Prefer Not To Say</label>
              </div>
            </div>
            <button className="bg-gray-200 cursor-pointer transition duration-200 border-2 border-black rounded p-3 hover:bg-gray-300 mb-3">
              Enter
            </button>
            <p className="text-center text-base pb-3">Or Sign Up with</p>
            <div className="mx-auto">
              <button className="btn">
                <span className="pr-1">Google</span>
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="btn">
                <span className="pr-1">Facebook</span>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </Route>
        </form>
      </div>
    </div>
  );
};

export default Main;
