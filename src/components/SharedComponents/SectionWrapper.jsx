export default function SectionWrapper({ children, sectionName }) {
  return (
    <section
      id={`${sectionName}`}
      className={`${sectionName} hidden-section  py-12 lg:py-20 `}
    >
      <div className="container px-6 md:px-8 h-full">{children}</div>{" "}
    </section>
  );
}
