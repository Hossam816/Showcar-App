"use client";

import { CustomBtnProps } from "@/types";
import Image from "next/image";

const CustomBtn = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  textStyles,
}: CustomBtnProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
