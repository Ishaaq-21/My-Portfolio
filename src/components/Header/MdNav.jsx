import navItems from "./NavLinks";
export default function MdNav() {
  return (
    <nav className="hidden md:block md:mr-8 lg:mr-12">
      <ul className="flex justify-around gap-8 text-sm lg:text-lg">
        {navItems.map((link) => {
          return (
            <li key={link.href}>
              <a
                className="transition-colors duration-300 dark:text-white  hover:text-primary dark:hover:text-primary font-semibold md:text-sm lg:text-base cursor-target p-2"
                href={link.href}
                data-target={link.label}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
