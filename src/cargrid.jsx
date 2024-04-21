import React from 'react';

function BMWCollectionSection() {
  return (
    <div className="bg-white py-8 md:py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-500 text-center mb-10">BMW COLLECTION</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Car images */}
        <div className="relative">
          <img src="./c1.png" alt="Car 1" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c2.png" alt="Car 2" className="w-full h-auto object-cover" />
        </div>
        <div className="relative md:col-span-2 lg:col-span-1">
          <img src="./c4.png" alt="Car 10" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c3.png" alt="Car 3" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c5.png" alt="Car 5" className="w-full h-auto object-cover" />
        </div>
        {/* Empty grid */}
        <div className="relative hidden md:block lg:col-span-2">
          {/* This div creates space */}
          <div className="w-full h-0"></div>
        </div>
        
        <div className="relative">
          <img src="./c10.png" alt="Car 4" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c6.png" alt="Car 8" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c7.png" alt="Car 4" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c8.png" alt="Car 6" className="w-full h-auto object-cover" />
        </div>
        <div className="relative">
          <img src="./c9.png" alt="Car 7" className="w-full h-auto object-cover" />
        </div>
       
      </div>
    </div>
  );
}

export default BMWCollectionSection;
