import { useEffect, useRef } from "react";

export default function SectionWrapper({ children, sectionName }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
            entry.unobserve(entry.target);
          }
        });
      },
      {
        threshold: window.innerWidth <= 768 ? 0.1 : 0.3,
        rootMargin: "200px 0px 0px 0px",
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id={`${sectionName}`}
      className={`${sectionName} ${
        sectionName === "Portfolio"
          ? "px-7 md:px-12 lg:py-16 relative"
          : "lg:py-20"
      } hidden-section py-12`}
    >
      {sectionName === "Portfolio" ? (
        children
      ) : (
        <div className="container px-6 md:px-8 h-full">{children}</div>
      )}
    </section>
  );
}
