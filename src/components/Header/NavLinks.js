const navItems = [
  { label: "Home", icon: "uil-estate", href: "#Home" },
  { label: "About", icon: "uil-user", href: "#About" },
  { label: "Skills", icon: "uil-list-ul", href: "#Skills" },
  { label: "Portfolio", icon: "uil-image", href: "#Portfolio" },
  { label: "Contact", icon: "uil-message", href: "#Contact" },
];
export function handleNavClick(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
export default navItems;
