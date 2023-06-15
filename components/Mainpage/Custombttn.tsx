'use client'
import { CustomBttnProps } from "@/types"
import Image from "next/image"

export default function Custombttn({title,containerStyles,handleClick}:CustomBttnProps) {
  return (
    <button 
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >

        <span className={"flex-1"}>
            {title}
        </span>
    </button>
  )
}
