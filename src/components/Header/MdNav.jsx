import navItems from "./NavLinks";
import { handleNavClick } from "./NavLinks";
export default function MdNav() {
  return (
    <nav className="hidden md:block md:mr-8 lg:mr-12">
      <ul className="flex justify-around gap-12 text-sm lg:text-lg items-center">
        {navItems.map((link) => {
          return (
            <li key={link.href}>
              <a
                onClick={handleNavClick}
                className="group relative cursor-target  text-black "
                href={link.href}
                aria-label={link.label}
              >
                {link.lgScreenIcon()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
