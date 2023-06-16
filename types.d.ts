import { MouseEventHandler } from "react"

export interface CustomBttnProps {
    title: string
    containerStyles: string
    handleClick?: MouseEventHandler 
    btnType?: "button"| "submit" 
    disable?:boolean
}