import MainContent from "./MainContent";
import MainImg from "./MainImage";
import SocialLinks from "./SocialLinks";
import Particles from "../../blocks/Animated UI compo/Particles/Particles";

export default function Home() {
  return (
    <section
      id="Home"
      className="hidden-section relative w-full  h-[calc(100%-45px)] md:h-[calc(100%-70px)] py-10 lg:py-0 "
    >
      <div
        className="md:-mt-8"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <Particles
          particleColors={["#6c6c6c", "#6c6c6c"]}
          particleCount={300}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />

        <div className="container mx-auto absolute ab mx-auto px-6 md:px-8 w-full h-full flex items-center flex-wrap md:flex-nowrap gap-x-2 gap-y-2 md:gap-x-6 left-1/2 -translate-x-1/2 top-0">
          <SocialLinks />
          <MainContent />
          <MainImg />
        </div>
      </div>
    </section>
  );
}
