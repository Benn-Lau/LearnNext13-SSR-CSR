"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

export default function SearchManufactuere({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setquery] = useState("");
  const filteredManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="relative w-full"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkwagen"
            onChange={(e) => setquery(e.target.value)}
            displayValue={(manufacturer: string) => manufacturer}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquery(" ")}
          >
            <Combobox.Options>
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Search "{query}" not exist
                </Combobox.Option>
              ):(
                filteredManufacturer.map((item)=>(
                  <Combobox.Option
                    key={item}
                    className={({active}) => `relative search-manufacturer__option ${active? `bg-primary-blue text-white`: 'text-gray-900'}`}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )
              
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}