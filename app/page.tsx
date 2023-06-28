"use client";
import CustomFilter from "@/components/Mainpage/CustomFilter";
import HeroSection from "@/components/Mainpage/Hero";
import SearchBar from "@/components/Mainpage/SearchBar";
import ShowMore from "@/components/Mainpage/ShowMore";
import Carcard from "@/components/carCard/Carcard";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // note search states
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  // note filter states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setmodel] = useState("");
  // note filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  // note pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch {
      console.log("ERROR");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // note Call function to fetch cars
    getCars;
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container ">
          <h1 className=" text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModal={setmodel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <Carcard car={car} />
              ))}
            </div>
            {loading && (
              <div>
                <Image
                  src={`loader.svg`}
                  alt="loader"
                  width={50}
                  height={50}
                  className=" object-contain"
                />
              </div>
            )}
            <ShowMore
              /** //fixed  OG code have earchParams.pageNumber which is not a property in the url params */
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className=" text-black text-xl font-bold">No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
