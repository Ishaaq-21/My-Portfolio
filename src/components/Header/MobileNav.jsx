import navItems, { handleNavClick } from "./NavLinks";
export default function MobileNav({ isOpen }) {
  return (
    <nav
      className={`
        absolute md:hidden w-full pt-6 pb-3 shadow-top left-0 transition-bottom bg-primary-bg transition-all duration-300 rounded-t-lg dark:bg-slate-900  ${
          isOpen ? "bottom-[43px]" : "-bottom-52"
        }
      `}
    >
      <ul className="grid grid-cols-3  gap-y-5 place-items-center">
        {navItems.map((link) => {
          return (
            <li key={link.href}>
              <a
                onClick={handleNavClick}
                key={link.href}
                href={link.href}
                data-target={link.label}
                className="w-full transition-colors duration-100  dark:text-white  hover:text-primary dark:hover:text-primary hover:text-primary text-center font-medium text-sm sm:text-lg cursor-target"
              >
                <i
                  className={`uis ${link.mobIcon} block text-lg sm:text-2xl mr-1 mb-1`}
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
