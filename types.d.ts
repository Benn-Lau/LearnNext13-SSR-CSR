import { MouseEventHandler } from "react";

export interface CustomBttnProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler;
  btnType?: "button" | "submit";
  disable?: boolean;
  textStyles?: string;
  rightIcon?: string;
}

export interface OptionProps {
  title: string
  value: string
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[]
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer?: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetialsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface SeartBttnProps {
  otherClasses?: string;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber:number
  isNext:boolean
}