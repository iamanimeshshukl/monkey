import React from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <div>
      <center>
        {" "}
        <div class="flex item-center rounded-full bg-white px-5 w-[70%]">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            class="w-full bg-[#0d1829] h-[1cm] flex bg-transparent pl-2 text-[#cccccc] outline-0"
            placeholder="Search name movie or select options"
          />
           <span className="mt-1 ">
           <svg
              width="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
           </span>
        </div>
      </center>
    </div>
  );
};

export default Search;
