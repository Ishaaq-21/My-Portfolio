import SectionHeader from "./SharedComponents/SectionHeader";
import SectionWrapper from "./SharedComponents/SectionWrapper";
import TiltedCard from "../blocks/Animated UI compo/TiltedCard/TiltedCard";
import { useContext } from "react";
import { MobileScreenContext } from "./SharedComponents/Context/MobileScreensContext";

const cards = [
  {
    icon: "uil uil-suitcase",
    title: "Completed",
    text: "+15  projects",
  },
  { icon: "uil-fire", title: "Passionate", text: "Coding Everyday" },
  { icon: "uil-clock", title: "Support", text: "Online 24/7" },
];

function AboutCard({ icon, title, text }) {
  return (
    <li className="card w-[90px] sm:w-[120px] lg:w-[150px] text-center bg-white dark:bg-slate-900 border-2 border-[#ccc] dark:border-primary-light  py-3 lg:py-5 px-2 lg:px-4 rounded-2xl">
      <i className={`${icon} text-2xl text-primary mb-2  block`}></i>
      <span className="text-[10px] sm:text-sm lg:text-base font-semibold text-title-dark dark:text-white block">
        {title}
      </span>
      <span className="text-[10px] text-subTitle dark:text-white/80">
        {text}
      </span>
    </li>
  );
}
const MobileImg = () => {
  return (
    <div className="image w-56 md:w-64 lg:w-80 shadow-[0_0_10px_1px_#f59e0b]  overflow-hidden rounded-3xl">
      <img src="/assets/MyPic.png" alt="My Picture" loading="lazy" />
    </div>
  );
};
function AboutSubContent() {
  return (
    <div className="content text-center lg:text-left">
      <ul className="cards flex gap-5 justify-center">
        {cards.map((card) => {
          return (
            <AboutCard
              key={card.text}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </ul>
      <p className="text-subTitle dark:text-white/80 text-sm md:text-base my-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
        Frontend Developer, I design and code responsive web pages using modern
        tech. I focus on delivering real results, with attention to performance,
        UX, and client goals.
      </p>
      <a
        href="/MyCv.pdf"
        download={"/MyCv.pdf"}
        className="main-btn text-xl cursor-target"
        aria-label="Download CV"
      >
        Download CV
        <i
          className="uil uil-file-download block text-xl md:text-3xl -mt-1"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
}

//The main Compo
export default function About() {
  const { mobileScreen } = useContext(MobileScreenContext);
  return (
    <SectionWrapper sectionName={"About"}>
      <SectionHeader title={"About"} subTitle={"My Introduction"} />
      <div className="main-content flex flex-col lg:flex-row md:gap-x-16 lg:gap-x-28 items-center gap-y-10">
        {mobileScreen ? (
          <MobileImg />
        ) : (
          <TiltedCard imageSrc={"/assets/MyPic.png"} />
        )}
        <AboutSubContent />
      </div>
    </SectionWrapper>
  );
}
