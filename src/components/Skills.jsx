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
