import React from 'react';

function AboutSection() {
    return (
        <section id="about">
            <div className="about-section bg-white py-8 md:py-20 text-center">
                <h1 className="text-blue-500 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10">About Us</h1>
                <div className="about-content max-w-lg mx-auto mb-6 md:mb-10 px-4">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700">
                        Changing Lanes is the official podcast from BMW. In these audio series,
                        we take you with us on new journeys through the BMW universe. Find out
                        more about sustainability, innovation, technology, mobility, and the 
                        latest trends. You can find and subscribe to Changing Lanes on all major podcast
                        platforms, so tune in!
                    </p>
                </div>
                <div className="video-container">
                    <h1 className="text-blue-500 text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10">Our Video</h1>
                    <div className="video-player mx-auto w-full max-w-md md:max-w-4xl lg:max-w-7xl">
                        <video controls className="w-full" >
                            <source src="/bmw.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;

