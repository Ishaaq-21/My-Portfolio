import MainContent from "./MainContent";
import MainImg from "./MainImage";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <section
      id="Home"
      className="hidden-section w-full  h-[calc(100%-45px)] md:h-[calc(100%-70px)] py-12 lg:py-20 "
    >
      <div className="container mx-auto px-6 md:px-8 w-full h-full flex items-center flex-wrap md:flex-nowrap gap-x-2 gap-y-2 md:gap-x-6">
        <SocialLinks />
        <MainContent />
        <MainImg />
      </div>
    </section>
  );
}
