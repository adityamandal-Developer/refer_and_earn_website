"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-50 flex justify-between items-center text-black h-[16vh] py-20 md:px-[10%] px-4 backdrop-blur-xl rounded-md w-full transition-transform duration-300 ${
        show ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex gap-4 text-xl">
        {["Courses", "About"].map((link, idx) => (
          <button
            key={idx}
            className="text-link hover:text-[#f070a1] decoration-none transition-all ease-linear font-[700]"
          >
            {link}
          </button>
        ))}
      </div>
      <div className="cursor-pointer ">
        <h1 className="text-logo sm:text-6xl text-3xl font-bold hover:text-[#ff3582] transition-all duration-300 ease-linear hover:drop-shadow-2xl">
          Accredian
        </h1>
      </div>
      <div className="flex gap-4 text-xl">
        {["Login", "Resourses"].map((link, idx) => (
          <button
            className="text-link hover:text-[#f070a1] decoration-none transition-all ease-linear font-[700]"
            key={idx}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
