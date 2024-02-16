import React from 'react';
import { Card } from 'flowbite-react';
import printing from '../assets/Image/printing.png';
import printivo from '../assets/Image/printivo.png';


const cardData = [
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: printing,
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: printivo,
  },
  
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="max-w-sm m-4"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={card.image}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {card.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
