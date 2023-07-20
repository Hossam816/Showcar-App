"use client";
import React, { useState } from "react";
import SearchMenuFacturer from "./SearchMenuFacturer";

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState("");
  const handlesearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handlesearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
