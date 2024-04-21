import React, { useState } from 'react';

// Define your car images
const carImages = [
  '/car1.png',
  '/car2.png',
  '/car3.png',
  '/car4.png',
  '/car5.png',
];

function OurCarsSection() {
  const [currentCar, setCurrentCar] = useState(0);

  const handleNextCar = () => {
    setCurrentCar((prevCar) => (prevCar === carImages.length - 1 ? 0 : prevCar + 1));
  };

  const handlePrevCar = () => {
    setCurrentCar((prevCar) => (prevCar === 0 ? carImages.length - 1 : prevCar - 1));
  };

  return (
    <section className="flex flex-col md:flex-row bg-white text-black py-20" id="design">
         {/* Right section with text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-10 md:mb-0">
        <div className="text-right mb-4">
          <h1 className="text-8xl font-bold text-blue-500">Our</h1>
          <h2 className="text-8xl font-bold ml-95">Cars</h2> {/* Adjust the margin-left here */}
        </div>
      </div>
      {/* Left section with car images */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="w-full max-w-lg relative">
          <img src={carImages[currentCar]} alt="Car" className="w-full h-auto object-cover" />
          {/* Arrows for navigating between cars */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
            <button onClick={handlePrevCar} className="bg-black text-white rounded-full w-10 h-10 flex justify-center items-center">&lt;</button>
            <button onClick={handleNextCar} className="bg-black text-white rounded-full w-10 h-10 flex justify-center items-center">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCarsSection;

