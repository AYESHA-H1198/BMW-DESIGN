import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="bg-black py-4 sticky-top">
            <div className="container mx-auto flex justify-between items-center">
                {/* Blue container with white text */}
                <div className="flex items-center">
                    <div className="md:hidden relative">
                        <button onClick={toggleMenu} className="text-white ml-4 focus:outline-none">
                            <svg className="h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd"></path>
                            </svg>
                        </button>

                        {/* Dropdown Content */}
                        {isMenuOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black text-white p-4">
                                <div className="flex justify-end">
                                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                                        <svg className="h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5 13l3 3 3-3v1h1l3-3v-1l-8 8-8-8v1l3 3h1V13z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-10">
                                    <a href="#" onClick={() => scrollToSection('home')} className="block py-4 text-xl hover:bg-gray-900 hover:text-blue-500 border-b border-gray-400">Home</a>
                                    <a href="#" onClick={() => scrollToSection('about')} className="block py-4 text-xl hover:bg-gray-900 hover:text-blue-500 border-b border-gray-400">About Us</a>
                                    <a href="#" onClick={() => scrollToSection('design')} className="block py-4 text-xl hover:bg-gray-900 hover:text-blue-500">Design</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-blue-600 text-white px-4 py-2 h-35 w-35">
                        <span className="font-bold">BMW</span>
                    </div>
                </div>

                {/* Navbar Links (Desktop) */}
                <div className="hidden md:flex">
                    <a href="#home" className="text-white px-4 py-2 hover:bg-gray-900 hover:text-blue-500">Home</a>
                    <a href="#about" className="text-white px-4 py-2 hover:bg-gray-900 hover:text-blue-500">Trending Blogs</a>
                    <a href="#design" className="text-white px-4 py-2 hover:bg-gray-900 hover:text-blue-500"></a>
                </div>

                {/* Pricing Button (Desktop) */}
                <div className="md:flex md:items-center">
                    <a href="#" className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Pricing</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
