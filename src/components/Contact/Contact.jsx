import SectionHeader from "../SharedComponents/SectionHeader";
import SectionWrapper from "../SharedComponents/SectionWrapper";
import ContactCard from "./ContactCard";
import socialAccounts from "./SocialAccsData";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <SectionWrapper sectionName={"Contact"}>
      <SectionHeader title={"Get In Touch"} subTitle={"Contact Me"} />
      <div className="grid grid-cols-1 md:grid-cols-2  justify-between lg:pt-10 gap-y-16 md:gap-y-0  md:gap-x-6">
        <div className="reach-out flex  flex-col items-center gap-y-5 ">
          <h2 className="text-subTitle dark:text-zinc-100/80 font-bold text-xl md:text-2xl  mb-3">
            Reach Out
          </h2>
          {socialAccounts.map((socialItem) => {
            return <ContactCard key={socialItem.icon} socialObj={socialItem} />;
          })}
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
