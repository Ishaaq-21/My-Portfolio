import SectionHeader from "./SharedComponents/SectionHeader";
import SectionWrapper from "./SharedComponents/SectionWrapper";
import { motion } from "framer-motion";
const skills = [
  {
    icon: "/public/assets/Skills/html.svg",
    skillName: "HTML",
    level: "Advanced",
  },
  {
    icon: "/public/assets/Skills/javascript.svg",
    skillName: "JavaScript",
    level: "Intermediate",
  },
  {
    icon: "/public/assets/Skills/css.svg",
    skillName: "CSS",
    level: "Advanced",
  },
  {
    icon: "/public/assets/Skills/tailwind.svg",
    skillName: "Tailwind",
    level: "Advanced",
  },
  {
    icon: "/public/assets/Skills/react.svg",
    skillName: "React",
    level: "Intermediate",
  },
  {
    icon: "/public/assets/Skills/nodejs.svg",
    skillName: "Node.js",
    level: "Basic",
  },
  {
    icon: "/public/assets/Skills/C++.png",
    skillName: "C++",
    level: "Advanced",
  },
  {
    icon: "/public/assets/Skills/git.svg",
    skillName: "Git",
    level: "Intermediate",
  },
  {
    icon: "/public/assets/Skills/typescript.svg",
    skillName: "TypeScript",
    level: "Basic",
  },
  {
    icon: "/public/assets/Skills/webpack.svg",
    skillName: "WebPack",
    level: "Basic",
  },
  {
    icon: "/public/assets/Skills/Mssql.svg",
    skillName: "Sql",
    level: "Intermediate",
  },
  {
    icon: "/public/assets/Skills/c-sharp.png",
    skillName: "C#",
    level: "Intermediate",
  },
];
export default function Skills() {
  return (
    <SectionWrapper sectionName={"Skills"}>
      <SectionHeader title={"Skills"} subTitle={"Technical Skills"} />
      <ul className="grid grid-cols-2 place-start-center md:grid-cols-[repeat(2,_minmax(0,_200px))] gap-y-8 gap-x-10 md:-gap-x-3 md:place-content-around bg-white border-4 rounded-xl border-primary/30 p-10 mx-auto ">
        {skills.map((skill) => {
          return (
            <SkillCard
              icon={skill.icon}
              skillName={skill.skillName}
              level={skill.level}
            />
          );
        })}
      </ul>
    </SectionWrapper>
  );
}

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
        <h3 className="text-base md:text-lg md:-mt-3 font-semibold">
          {skillName}
        </h3>
        <span className="block md:hidden mt-1 text-subTitle text-[10px] md:text-xs ">
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
