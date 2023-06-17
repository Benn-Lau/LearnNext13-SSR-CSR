import { MouseEventHandler } from "react"

export interface CustomBttnProps {
    title: string
    containerStyles: string
    handleClick?: MouseEventHandler 
    btnType?: "button"| "submit" 
    disable?:boolean
}

export interface CustomFilterProps {
    title:string
}

export interface SearchManufacturerProps {
    manufacturer:string
    setManufacturer?:(manufacturer:string) => void
}