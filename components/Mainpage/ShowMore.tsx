"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import Custombttn from "./Custombttn";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  };
  return (
    <div className=" w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Custombttn
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

// bug Audi Rs E-Tron Gt idk api error or tf need to debug
// note No clue why Audi Rs E-Tron Gt model not render but I can't find it after .. 
// fix everythings seems fine after several test idk where the bug goes .. just put this here just in case