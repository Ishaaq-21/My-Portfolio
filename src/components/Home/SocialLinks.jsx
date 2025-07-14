const socialLinks = [
  {
    name: "LinkedIn",
    icon: "uil-linkedin",
    href: "https://www.linkedin.com/in/h-ishaq-hk/",
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: "uil-github",
    href: "https://github.com/Ishaaq-21",
    hoverColor: "hover:text-slate-500",
  },
  {
    name: "Facebook",
    icon: "uil-facebook-f",
    href: "https://www.facebook.com/hk.ishaq/?locale=ar_AR",
    hoverColor: "hover:text-[#1877F2]",
  },
];
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
              className={`${link.hoverColor} transition duration-300 text-3xl`}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
