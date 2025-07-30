import React, { Suspense, useEffect } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar";

const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

const MainSections = () => {
  //This implements the on scroll animation
  useEffect(() => {
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
        threshold: window.innerWidth <= 768 ? 0.1 : 0.3,
        rootMargin: "200px 0px 0px 0px",
      }
    );
    const hiddenSections = document.querySelectorAll(".hidden-section");
    hiddenSections.forEach((el) => observer.observe(el));
  }, []);

  //This makes the page srolls to the top automatically on page reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="w-full h-full bg-zinc-200 dark:bg-slate-950 md:pt-[70px]">
        <Home />
        <Suspense fallback={<div className="z-[9999]">Loading...</div>}>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer></Footer>
      <ScrollBar />
    </>
  );
};
export default MainSections;
