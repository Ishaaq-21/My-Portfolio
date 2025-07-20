import SectionWrapper from "./SharedComponents/SectionWrapper";
import socialLinks from "./Home/socialLinks";
const sectionNames = ["About", "Skills", "Portfolio", "Contact"];
export default function Footer() {
  return (
    <footer className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="w-fit mx-auto text-title text-4xl mb-10 font-bold">
          Isaaq <span className="text-primary">Hk</span>
        </h2>
        <ul className="section flex justify-center md:justify-around md:w-3/4 mb-8 mx-auto place-items-center gap-5">
          {sectionNames.map((name) => {
            return (
              <li>
                <a
                  href={`#${name}`}
                  className="text-sm md:text-lg font-semibold text-subTitle hover:text-primary transition duration-300"
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="section flex flex-row-reverse justify-center w-3/4 mb-8 mx-auto place-items-center gap-5">
          {socialLinks.map((socialAcc) => {
            return (
              <li>
                <a
                  href={socialAcc.href}
                  className={`text-4xl text-subTitle  transition duration-300 ${socialAcc.hoverColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={socialAcc.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto w-fit text-center text-sm md:text-base">
          &copy; Isaaq <span className="text-primary">Hk</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
