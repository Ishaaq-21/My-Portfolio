import { useState } from "react";
import SectionHeader from "../SharedComponents/SectionHeader";
import projectsData from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "../SharedComponents/SectionWrapper";

export default function Portfolio() {
  //I will implement this later, ignore it
  const [showMore, setShowMore] = useState(false);
  const finalProjectsArr = showMore ? projectsData : projectsData.slice(0, 6);
  return (
    <SectionWrapper sectionName={"Portfolio"}>
      <SectionHeader title={"Portfolio"} subTitle={"My Work"} />

      <ul className="grid grid-cols-[repeat(1,_minmax(0,_300px))]   sm:grid-cols-2 xl:grid-cols-[repeat(3,_minmax(0,_450px))] gap-5 justify-center">
        {finalProjectsArr.map((projectItem) => {
          return <ProjectCard key={projectItem.name} project={projectItem} />;
        })}
      </ul>
      <button
        className="main-btn !block !mx-auto mt-8 cursor-target"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </SectionWrapper>
  );
}
