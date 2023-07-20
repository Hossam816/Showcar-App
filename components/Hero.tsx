"use client";

import React from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title">
          Welcome to our website, Find, book, or rent a car easily!
          <br />
        </h2>
        <p className="hero__subtitle">
          We provide the best services for you. Search cars by make and model.
        </p>
        <CustomBtn
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
