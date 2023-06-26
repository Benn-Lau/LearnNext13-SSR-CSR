"use Client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import Custombttn from "./Custombttn";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
    // bug Only works till 20 for "Limit" 
    //fixed page.tsx in Home 
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit',`${newLimit}`)

    router.push(newPathName)
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
