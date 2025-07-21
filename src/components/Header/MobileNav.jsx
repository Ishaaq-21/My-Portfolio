import clsx from "clsx";
import navItems from "./NavLinks";
export default function MobileNav({ isOpen }) {
  return (
    <nav
      className={clsx(
        "absolute md:hidden w-full pt-6 pb-3 shadow-top left-0 transition-bottom bg-primary-bg transition-all duration-300 rounded-t-lg",

        isOpen ? "bottom-[45px]" : "-bottom-52"
      )}
    >
      <ul className="grid grid-cols-3  gap-y-5 place-items-center">
        {navItems.map((link) => {
          return (
            <li>
              <a
                key={link.href}
                href={link.href}
                className="w-full transition-colors duration-300 hover:text-primary text-center font-medium text-sm sm:text-lg"
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
  );
}
