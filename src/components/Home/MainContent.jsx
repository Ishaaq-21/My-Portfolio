export default function MainContent() {
  return (
    <div className="main-content order-2 md:order-1 lg:grow-[1] self-start md:self-auto ">
      <div className="flex items-center gap-2 mb-2 lg:mb-5">
        <h1 className="font-bold  text-3xl lg:text-5xl text-title font-poppins">
          Isaaq Hk
        </h1>
      </div>
      <h3 className="sub-title relative before:content-none md:before:content-['']   md:ml-[95px] text-base md:text-lg lg:text-xl text-title font-semibold">
        Front-End Developer
      </h3>
      <p className="md:max-w-[300px] lg:max-w-[400px]  mt-5 mb-8 md:mb-10 text-subTitle text-sm lg:text-lg font-semibold">
        I'm a creative developer passionate about building smart, responsive,
        and user-focused web experiences.
      </p>
      <button
        type="button"
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-base px-5 py-4 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 transition duration-300 gap-3"
      >
        Say Hello
        <i
          className="uil uil-message block -rotate-45 text-2xl -mt-1"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}
