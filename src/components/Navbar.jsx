import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img
          src={assets.logo}
          alt="Golden Key Residence logo"
          className="cursor-pointer"
        />
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>

          <a className="cursor-pointer hover:text-gray-400" href="#About">
            About
          </a>

          <a className="cursor-pointer hover:text-gray-400" href="#Projects">
            Projects
          </a>

          <a
            className="cursor-pointer hover:text-gray-400"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          alt="Menu Icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            alt="Cross icon"
            className="w-6"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
