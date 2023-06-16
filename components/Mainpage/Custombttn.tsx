'use client'
import { CustomBttnProps } from "@/types"
import Image from "next/image"

export default function Custombttn({title,containerStyles,handleClick,btnType,disable}:CustomBttnProps) {
  return (
    <button 
        disabled={false || disable}
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
