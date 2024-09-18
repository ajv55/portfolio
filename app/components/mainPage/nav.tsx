'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-dark text-white  w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link className="text-3xl tracking font-bold" href="/">
            Abel J
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="hover:text-accent-light text-lg" href="#home">
              Home
          </Link>
          <Link className="hover:text-accent-light text-lg" href="#about">
              About
          </Link>
          <Link className="hover:text-accent-light text-lg" href="#projects">
              Projects
          </Link>
          <Link className="hover:text-accent-light text-lg" href="#contact">
              Contact
          </Link>
          <Link className="hover:text-accent-light text-lg" href="/resume">
              Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>{isOpen && (
        <motion.div
          className="fixed top-12 lg:hidden  right-0 w-48 h-[14rem] rounded-xl bg-gradient-to-bl from-background to-primary-dark flex flex-col justify-between items-start shadow-lg z-50"
          initial={{ scale:0, opacity: 0, y: '-100vw'  }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale:0, opacity: 0, y: '-100vw'  }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
        >
          <div className="flex  flex-col items-center justify-center h-full w-full py-4 space-y-4">
            <Link className="text-lg hover:text-gray-200" href="#home" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="text-lg hover:text-gray-200" href="#about" onClick={toggleMenu}>
              About
            </Link>
            <Link className="text-lg hover:text-gray-200" href="#projects" onClick={toggleMenu}>
              Projects
            </Link>
            <Link className="text-lg hover:text-gray-200" href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
