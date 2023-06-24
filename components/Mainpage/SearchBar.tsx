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

export default function SearchBar() {
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert(`bro`);
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
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
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBttn otherClasses="sm:hidden" />
      </div>
      <SearchBttn otherClasses="max-sm:hidden" />
    </form>
  );
}
