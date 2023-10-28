import React from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <h1 className=" text-[#b25068] text-3xl text-left ml-[350px] mt-20 font-semibold">
        Custom + Navigation <br /> based searchbar
      </h1>
      <SearchBar />
    </div>
  );
};

export default App;
