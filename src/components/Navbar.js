// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect  } from "react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = React.createRef();
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (!dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [dropdownRef]);
  
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Francesco Magagna
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            Chi sono
          </a>
          <div class="relative" ref={dropdownRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <a href="#" class="mr-5 hover:text-white">I miei servizi</a>
        {isDropdownOpen && (
          <div class="absolute right-0 w-48 mt-2 py-2 bg-gray-800 rounded-md shadow-xl">
            <a href="#offer" class="block px-4 py-2 text-sm font-semibold hover:text-white">Servizi di investimento</a>
            <a href="#" class="block px-4 py-2 text-sm font-semibold hover:text-white">Pensione complementare</a>
            <a href="#" class="block px-4 py-2 text-sm font-semibold hover:text-white">Come iniziare a investire</a>
          </div>
        )}
      </div>
          <a href="https://tally.so/r/mJ9027" className="mr-5 hover:text-white">
            Richiedi una diagnosi gratuita
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contattami
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
