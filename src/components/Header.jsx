import clsx from "clsx";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: "uil-estate", href: "#Home" },
  { label: "About", icon: "uil-user", href: "#About" },
  { label: "Skills", icon: "uil-list-ul", href: "#Skills" },
  { label: "Qualifications", icon: "uil-award", href: "#Qualifications" },
  { label: "Portfolio", icon: "uil-image", href: "#Portfolio" },
  { label: "Contact", icon: "uil-message", href: "#Contact" },
];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="flex justify-between items-center md:h-[70px]">
      <p className="font-bold hidden md:block text-2xl text-primary hover:text-primary-dark">
        <a href="/">Isaac</a>
      </p>
      <nav className="hidden md:block">
        <ul className="flex justify-around gap-8 text-sm lg:text-lg">
          {navItems.map((link) => {
            return (
              <li key={link.href}>
                <a className="font-medium text-base" href={link.href}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={clsx(
          "md:hidden w-full absolute flex justify-between items-center bottom-0 left-0 h-[45px] px-6  text-primary z-10",
          isOpen ? "bg-zinc-100" : "rounded-t-lg shadow-top"
        )}
      >
        <span className={clsx("font-semibold text-xl ", isOpen && "hidden")}>
          Isaac
        </span>
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className={clsx(
            " hover:text-primary-dark transition-color duration-300 cursor-pointer ml-auto font-bold"
          )}
          onClick={handleToggleMenu}
        >
          {" "}
          <i
            className={clsx(
              !isOpen ? "uil uil-apps text-xl" : "uil uil-times text-3xl",
              ""
            )}
          ></i>
        </button>
      </div>
      <nav
        className={clsx(
          "absolute md:hidden w-full pt-8 shadow-top left-0 transition-bottom bg-zinc-100 transition-all duration-300",

          isOpen ? "bottom-[45px]" : "-bottom-full"
        )}
      >
        <ul className="grid grid-cols-3  gap-y-5 place-items-center">
          {navItems.map((link) => {
            return (
              <li>
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full text-center font-medium text-sm sm:text-lg"
                >
                  <i
                    className={`uis ${link.icon} block text-lg sm:text-2xl mr-1 mb-1`}
                  ></i>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
