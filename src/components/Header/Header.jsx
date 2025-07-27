import clsx from "clsx";
import { useState } from "react";
import DarkModeToggle from "../../blocks/Animated UI compo/DarkModeButton/DarkModeButton";
import MobileNav from "./MobileNav";
import MdNav from "./MdNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="shadow-top  md:shadow-none left-0 bottom-0 md:top-0 z-50 bg-secondary-bg dark:bg-slate-900 fixed w-full  h-[45px] md:h-[70px]">
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center h-full relative">
        <p
          className={clsx(
            "font-semibold  text-lg md:text-2xl text-primary hover:text-primary-dark transition-colors duration-300 cursor-target cursor-none p-2",
            isOpen && "hidden"
          )}
        >
          <a href="/">Isaaq</a>
        </p>
        {/* this nav bar for md+ screens */}
        <MdNav />

        <button
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className={clsx(
            "md:hidden hover:text-primary-dark transition-colors duration-300  ml-auto font-bold dark:text-white cursor-target "
          )}
          onClick={handleToggleMenu}
        >
          {" "}
          <i
            className={clsx(
              !isOpen ? "uil uil-apps text-xl" : "uil uil-times text-3xl ",
              ""
            )}
          ></i>
        </button>

        {/* this navbar for mobile screens */}
        <MobileNav isOpen={isOpen} />
        <DarkModeToggle />
      </div>
    </header>
  );
}
