import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white rounded-2xl">
      <div className="text-gray-200 h-20 w-full flex items-center justify-between p-2">

        <img
          className="h-16 w-25"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThybfFoHhlDl0VZ9VWIt6h_bBx1XwTxAbSC_lBVUIhzU86utNW4fafIJg&s=10"
          alt="Logo"
        />

        <div className="text-xl font-semibold flex items-center gap-7 p-5">

          <a
            href="#home"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Connect
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
