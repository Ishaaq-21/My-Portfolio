import socialLinks from "./socialLinks";
export default function SocialLinks() {
  return (
    <ul className="social-links flex gap-y-3 flex-col    order-0 w-[50px]  lg:w-[118px]">
      {socialLinks.map((link) => {
        return (
          <li key={link.href}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={`Visit my ${link.name} profile`}
              className={`${link.hoverColor} transition duration-300 text-3xl dark:text-zinc-100 dark:${link.hoverColor} ${link.darkHoverColor}`}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
