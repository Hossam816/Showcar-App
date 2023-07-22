import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles: string;
    rightIcon: string;
    isDisabled: boolean;

}
export interface optionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: optionProps[];
}

export interface SearchManuFacturerProps {
    manuFacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface CarsProps {
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

export interface FilterProps {
    manuFacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}