export default function MainContent() {
  return (
    <div className="main-content order-2 md:order-1 lg:grow-[1] self-start md:self-auto ">
      <div className="flex items-center gap-3  md:gap-24 lg:gap-12 mb-2 lg:mb-5 ">
        <h1 className="font-bold  text-3xl lg:text-5xl text-title font-poppins dark:text-zinc-100">
          Isaaq Hk
        </h1>
        <div className="hand-container origin-center inline-block">
          <img
            src="/public/assets/hand.svg"
            className="waving-hand w-8 md:w-10 lg:w-12"
            alt=""
          />
        </div>
      </div>
      <h3 className="sub-title relative  md:before:content-['']  md:ml-[95px] text-base md:text-lg lg:text-xl text-title font-semibold dark:text-white/90 ">
        Front-End Developer
      </h3>
      <p className="md:max-w-[300px] lg:max-w-[400px]  mt-5 mb-8 md:mb-10 text-subTitle text-sm lg:text-lg font-semibold dark:text-white/70">
        I'm a creative developer passionate about building smart, responsive,
        and user-focused web experiences.
      </p>

      <a className="main-btn text-base" href="#Contact">
        Say Hello
        <i
          className="uil uil-message block -rotate-45 text-xl md:text-2xl -mt-1"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
}
