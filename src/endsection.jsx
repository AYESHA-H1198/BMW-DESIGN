import React from 'react';

function BMWForeverSection() {
  return (
    <div>
    <div className="bg-white pt-12 md:pt-20 lg:pt-24 pb-8 px-8 md:px-16 lg:px-24"> {/* Added px-8, md:px-16, lg:px-24 for side padding */}
      <h1 className="text-4xl md:text-6xl font-bold text-blue-500 text-center mb-10">BMW FOREVER</h1>
      <p className="text-lg text-center text-gray-800 mb-24"> {/* Increased bottom margin */}
        Life has many unforgettable moments in store for us. 
        Some, we think back on fondly; others, less so. But
         every one of them is unique. That is why a BMW is 
         more than just a method of transportation. It is a 
         companion that creates space for emotion and allows us to 
         feel the joy which lives within every single moment. Dive
          into the emotional farewell drive in this video, and 
          discover exclusive behind-the-scenes recordings from the film production.
      </p>
      </div>
      <div className="mt-8 md:mt-12 lg:mt-16 bg-black text-white py-4 text-center"> {/* Increased top margin */}
        <p>2023 Mike Delsing | All visuals belong to their respective owners.</p>
      </div>
  
    </div>
  );
}

export default BMWForeverSection;

