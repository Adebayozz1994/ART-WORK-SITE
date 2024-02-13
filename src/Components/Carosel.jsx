import React from 'react';
import { Carousel } from 'flowbite-react';
import postcard from '../assets/Image/postcard.jpg';
import Banners from '../assets/Image/Banners.png';
import printivo from '../assets/Image/printivo.png';
import printing from '../assets/Image/printing.png';

const Carosel = () => {
  return (
    <div className="flex flex-wrap">
      <section className="w-full lg:w-1/2">
        <div className="h-96">
          <Carousel>
            <div className="flex flex-col h-full items-center justify-center bg-white-100 dark:bg-white-100 dark:text-white">
              <img src={postcard} alt="" className="w-full h-48 object-cover" />
              <p className="mt-2 text-red-700">Postcard Description</p>
            </div>
            <div className="flex flex-col h-full items-center justify-center bg-white-100 dark:bg-white-100 dark:text-white">
              <img src={Banners} alt="" className="w-full h-48 object-cover" />
              <p className="mt-2 text-red-700">Banners Description</p>
            </div>
            <div className="flex flex-col h-full items-center justify-center bg-white-100 dark:bg-white-100 dark:text-white">
              <img src={printivo} alt="" className="w-full h-48 object-cover" />
              <p className="mt-2 text-red-700">Printivo Description</p>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="w-full lg:w-1/2">
        <div className="flex justify-center items-center h-full">
          <img src={printing} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Carosel;
