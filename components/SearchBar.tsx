"use client";
import React, { useState } from "react";
import SearchMenuFacturer from "./SearchMenuFacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBtn = ({ searchClasses }: { searchClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${searchClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magni icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();
  const [manuFacturer, setManuFacturer] = useState("");

  const [model, setModel] = useState("");

  const handlesearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manuFacturer === "" && model === "") {
      return alert("Please fill in the input");
    }
    updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manuFacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manuFacturer) {
      searchParams.set("manuFacturer", manuFacturer);
    } else {
      searchParams.delete("manuFacturer");
    }

    const newPathName = `${
      window.location.pathname
    }? ${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form action="" className="searchbar" onSubmit={handlesearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchBtn searchClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="label"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBtn searchClasses="sm:hidden" />
      </div>
      <SearchBtn searchClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
