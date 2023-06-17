"use client";
import React from "react";
import SearchManufactuere from "./SearchManufactuere";
import { useState } from "react";
import SearchManufacturer from "./SearchManufactuere";
export default function SearchBar() {
  const [manufacturer, setmanufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
}
