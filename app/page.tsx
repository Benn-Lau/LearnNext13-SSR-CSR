'use client'
import CustomFilter from "@/components/Mainpage/CustomFilter";
import HeroSection from "@/components/Mainpage/Hero";
import SearchBar from "@/components/Mainpage/SearchBar";
import ShowMore from "@/components/Mainpage/ShowMore";
import Carcard from "@/components/carCard/Carcard";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useState , useEffect} from "react";

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
    setLoading(true)
    try {
      // fix I found the culpit because I name it return => result in fetchCars a bug occurs it fix the problem after I change the result to car Result ... my mistake ... lel  
      const carResult = await fetchCars({
        manufacturer: manufacturer,
        year: year,
        fuel: fuel,
        limit: limit ,
        model: model,
      });
      setAllCars(carResult);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // note Call function to fetch cars
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

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
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <Carcard car={car} />
              ))}
            </div>
            <ShowMore
              /** //fixed  OG code have earchParams.pageNumber which is not a property in the url params */
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > allCars.length}
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
