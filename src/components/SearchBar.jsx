import React, { useState, useEffect, useRef } from "react";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [isInputEnabled, setInputEnabled] = useState(false);
  const inputRef = useRef(null);
  const typedText = useRef("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "h") {
        event.preventDefault(); // Prevent the default Ctrl+K action
        setInputEnabled(true);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      } else if (isInputEnabled) {
        if (event.key.length === 1) {
          // Only add regular characters to the typed text
          typedText.current += event.key;
          if (inputRef.current) {
            inputRef.current.value = typedText.current;
          }
        } else if (event.key === "Backspace") {
          // Handle Backspace key
          typedText.current = typedText.current.slice(0, -1);
          if (inputRef.current) {
            inputRef.current.value = typedText.current;
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isInputEnabled]);

  return (
    <>
      <div className= "mt-12 bg-[#474E68] border search-div justify-between w-[720px] flex mx-auto my-12 rounded-[50px]  h-14 px-2">
        <div className="left flex">
          <CiSearch className="icon text-4xl mt-[10px] ml-1 text-[#b25068]" />
          {/* <input
          className="pb-2 bg-transparent text-gray-200 h-14 rounded-[50px] w-[450px] text-2xl font-light p-2 "
          type="text"
        /> */}
          {isInputEnabled ? (
            <input
              ref={inputRef}
              className=" pb-2 bg-transparent text-gray-200 h-14 rounded-[50px] w-[450px] text-2xl font-light p-1 px-2 "
                          type="text"
                          placeholder="Search for Products..."
            />
          ) : (
            <div className="text-gray-200 text-xl font-light p-2 pt-3">
              Press Ctrl+h to enable the input field
            </div>
          )}
        </div>
        <div className="right float-right right-0 mr-2">
          <button className="border-none p-2 bg-[#282A3A] text-[#b25068] font-bold text-xl  rounded-xl mt-[6px] ml-1 px-4">
            Ctrl
          </button>
          <button className="text-2xl text-[#282A3A] ml-1">+</button>
          <button className="border-none p-2 bg-[#282A3A] text-[#b25068] font-bold text-xl  rounded-xl mt-[6px] ml-1 px-4">
            K
          </button>
        </div>
      </div>
      {/* <button
        onClick={() => setInputEnabled(!isInputEnabled)}
        className="border-none p-2 bg-[#282A3A] text-[#b25068] font-bold text-xl  rounded-xl mt-[6px] ml-1 px-4"
      >
        Enable Input
      </button> */}
    </>
  );
};

export default SearchBar;
