import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar";
import { useEffect } from "react";

const AnimateSectionOnScroll = () => {
  useEffect(() => {
    function getResponsiveThreshold() {
      if (window.innerWidth <= 768) {
        // Mobile devices
        return 0.1;
      } else {
        // Desktop devices
        return 0.3;
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
            observer.unobserve(entry.target); // Avoid repeated triggering
          }
        });
      },
      {
        threshold: getResponsiveThreshold(), // Wait until 50% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Optional, tweak if you want slight delay
      }
    );
    const hiddenSections = document.querySelectorAll(".hidden-section");
    hiddenSections.forEach((el) => observer.observe(el));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="w-full h-full bg-zinc-100 dark:bg-slate-950 md:pt-[70px]">
        <Home></Home>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer></Footer>
      <ScrollBar />
    </>
  );
};
export default AnimateSectionOnScroll;
