import NavLayout from "../../layouts/NavLayout";
import { FiSearch } from "react-icons/fi";
import { BsChatSquareQuote } from "react-icons/bs";

import Button from "../common/Button";
import { useState } from "react";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NavLayout>
      <div>
        <figure>
          <img width="190" src="src/assets/pronature-logo.svg" alt="" />
        </figure>
      </div>
      <div className="flex gap-x-[40px] items-center">
        <div className="flex gap-x-[20px] font-medium">
          <a className="hover:text-white" href="">
            Resources
          </a>
          <a className="hover:text-white" href="">
            Home
          </a>
          <a className="hover:text-white" href="">
            About us
          </a>
          <a className="hover:text-white" href="">
            Our works
          </a>
        </div>
        <div className="flex gap-x-[20px] items-center">
          {!isClicked && (
            <h1
              onMouseOver={() => setIsClicked(!isClicked)}
              className="text-2xl cursor-pointer hover:text-white"
            >
              <FiSearch />
            </h1>
          )}

          {isClicked && (
            <form className="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
              </div>
            </form>
          )}
          <Button
            onMouseOver={() => setIsClicked(!isClicked)}
            className="transition-2 bg-black hover:bg-white hover:text-black rounded-lg flex items-center justify-center py-3 px-5 font-medium text-sm text-white"
            text={isClicked ? <BsChatSquareQuote /> : "Request a demo"}
          />
        </div>
      </div>
    </NavLayout>
  );
};

export default Navbar;
