import React from 'react';
import { FaTasks } from "react-icons/fa";

const nav = [
  { item1: "Home" },
  { item2: "About" },
  { item3: "Contact Us" },
];

const Navbar = ({ isOpen, setIsOpen }) => {
  
  return (
    <>
      <div className='text-xl bg-purple-300 flex font-bold sticky top-0 p-3 w-[100%] text-purple-800 z-30 justify-between md:text-4xl'>
        <h1>TaskManager</h1>

        {/* Mobile menu icon */}
        <FaTasks
          onClick={() => setIsOpen(true)}
          className="md:hidden text-purple-500 text-2xl cursor-pointer"
        />

        {/* Desktop nav */}
        <div className='md:flex gap-6 hidden'>
          {nav.map((gett, index) => (
            <p key={index} className='text-sm md:text-xl font-semibold'>
               <a href="/home">{gett.item1}</a>
               <a href="/about">{gett.item2}</a>
               <a href="/contact">{gett.item3}</a>
            </p>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={()=>setIsOpen(false)}
        >
          <div
            className="bg-purple-200 w-64 h-full  p-5 shadow-lg"
            onClick={(e)=>e.stopPropagation()}
          >
            <button
              className="text-red-500 font-bold mb-5"
              onClick={() => setIsOpen(false)}
            >
              Close ✖
            </button>

            <nav className="flex flex-col gap-4 text-lg text-purple-900 font-semibold">
              <a href="/home" className='hover:underline' onClick={() => setIsOpen(false)}>Home</a>
              <a href="/about" className='hover:underline' onClick={() => setIsOpen(false)}>About</a>
              <a href="/contact" className='hover:underline' onClick={() => setIsOpen(false)}>Contact Us</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
