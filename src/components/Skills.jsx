import Spider from "../blocks/Animated UI compo/Spider/SpiderSkills";
import SectionHeader from "./SharedComponents/SectionHeader";
import SectionWrapper from "./SharedComponents/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper sectionName={"Skills"}>
      <SectionHeader title={"Skills"} subTitle={"Technical Skills"} />
      <Spider />
    </SectionWrapper>
  );
}
// I need to animate the skills

function SkillCard({ icon, skillName, level }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="skill-card relative"
    >
      <img
        className=" max-w-[40px] md:max-w-[50px] transition transition-all duration-300"
        src={icon}
        alt={skillName}
        loading="lazy"
      />
      <div className="">
        <h3 className="text-base dark:text-zinc-100 md:text-lg md:-mt-3 font-semibold">
          {skillName}
        </h3>
        <span className="block md:hidden mt-1 text-subTitle dark:text-white text-[10px] md:text-xs ">
          {level}
        </span>
        <div
          className={`hidden md:block mt-5 absolute -bottom-0 left-[50%] -translate-x-2/4 md:translate-x-0 md:left-[70px] h-2 rounded ${
            level === "Advanced"
              ? "w-[calc(100%-60px)] bg-green-500"
              : level === "Intermediate"
              ? "w-[calc(70%-60px)] bg-yellow-400"
              : "w-[calc(50%-60px)] bg-red-400"
          }`}
        ></div>
      </div>
    </motion.div>
  );
}
