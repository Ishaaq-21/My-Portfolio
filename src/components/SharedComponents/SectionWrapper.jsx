export default function SectionWrapper({ children, sectionName }) {
  return (
    <section
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
