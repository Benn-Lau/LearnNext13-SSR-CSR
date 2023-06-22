"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import Custombttn from "../Mainpage/Custombttn";
import CarDetails from "./CarDetails";
interface CarCard_Props {
  car: CarProps;
}

export default function Carcard({ car }: CarCard_Props) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className=" car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className=" self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt="car modal"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-grey">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src={generateCarImageUrl(car)}
              alt="steering wheel svg"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt="tire svg" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt="gas svg" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Custombttn
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={()=>(setisOpen(false))} car={car} />
    </div>
  );
}
