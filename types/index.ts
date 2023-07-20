import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";

}

export interface CustomFilterProps {
    title: string
}

export interface SearchManuFacturerProps {
    manuFacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}