"use client";
import React from "react";
import SearchManufactuere from "./SearchManufactuere";
import { useState } from "react";
import SearchManufacturer from "./SearchManufactuere";
import { SeartBttnProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBttn({ otherClasses }: SeartBttnProps) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="Search Iocn"
        width={40}
        height={40}
        className=" object-contain"
      />
    </button>
  );
}

export default function SearchBar({setModal, setManufacturer}) {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert(`bro`);
    }

    setModal(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchBttn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={`/model-icon.png`}
          alt="car model"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="modal"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBttn otherClasses="sm:hidden" />
      </div>
      <SearchBttn otherClasses="max-sm:hidden" />
    </form>
  );
}
