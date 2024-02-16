import React from 'react';
import { Carousel } from 'flowbite-react';
import postcard from '../assets/Image/postcard.jpg';
import Banners from '../assets/Image/Banners.png';
import printivo from '../assets/Image/printivo.png';
import printing from '../assets/Image/printing.png';

const Carosel = () => {
  return (
    <div className="flex flex-wrap pt-52">
    <section className="w-full lg:w-1/2">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">FEMI TO THE WORLD</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos harum libero aperiam quasi unde ad veniam aliquid officia ipsam.
        </p>
      </div>
    </section>
    <section className="w-full lg:w-1/2">
      <div className="flex justify-center items-center h-full">
        <img src={printing} alt="Printing" />
      </div>
    </section>
  </div>
  
  );
};

export default Carosel;
