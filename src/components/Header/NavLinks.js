import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  PortfolioIcon,
  SkillsIcon,
} from "./LgNavIcons";

export function handleNavClick(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const navItems = [
  {
    label: "Home",
    mobIcon: "uil-estate",
    lgScreenIcon: HomeIcon,
    href: "#Home",
  },
  {
    label: "About",
    mobIcon: "uil-user",
    lgScreenIcon: AboutIcon,
    href: "#About",
  },
  {
    label: "Skills",
    mobIcon: "uil-list-ul",
    lgScreenIcon: SkillsIcon,
    href: "#Skills",
  },
  {
    label: "Portfolio",
    mobIcon: "uil-image",
    lgScreenIcon: PortfolioIcon,
    href: "#Portfolio",
  },
  {
    label: "Contact",
    mobIcon: "uil-message",
    lgScreenIcon: ContactIcon,
    href: "#Contact",
  },
];

export default navItems;
