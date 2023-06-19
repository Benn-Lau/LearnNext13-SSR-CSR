'use client'
import { CustomBttnProps } from "@/types"
import Image from "next/image"

export default function Custombttn({title,containerStyles,handleClick,btnType,rightIcon,textStyles }:CustomBttnProps) {
  return (
    <button 
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >

        <span className={"flex-1"}>
            {title}
        </span>
    </button>
  )
}
