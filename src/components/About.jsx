const cards = [
  {
    icon: "uil uil-suitcase",
    title: "Completed",
    text: "+15  projects",
  },
  { icon: "uil-fire", title: "Passionate", text: "Coding Everyday" },
  { icon: "uil-clock", title: "Support", text: "Online 24/7" },
];
export default function About() {
  return (
    <section id="About" className="about py-12 md:py-20 h-[100vh]">
      <div className="container px-6 md:px-8 min-h-[100vh]">
        <div className="sec-head mb-14">
          <h1 className="text-title font-bold w-fit  mx-auto text-3xl lg:text-5xl">
            About Me
          </h1>
          <h4 className="text-subTitle text-sm w-fit mx-auto mt-1">
            My Introduction
          </h4>
        </div>
        <div className="main-content flex flex-col lg:flex-row md:gap-x-16 lg:gap-x-28 items-center gap-y-10">
          <div className="image w-56 md:w-64 lg:w-80  overflow-hidden rounded-3xl">
            <img src="/public/assets/MyPic.png" alt="" />
          </div>
          <div className="content text-center lg:text-left">
            <ul className="cards flex gap-5 justify-center">
              {cards.map((card) => {
                return (
                  <Card icon={card.icon} title={card.title} text={card.text} />
                );
              })}
            </ul>
            <p className="text-subTitle text-sm md:text-base my-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
              Frontend Developer, I design and code responsive web pages using
              modern tech. I focus on delivering real results, with attention to
              performance, UX, and client goals.
            </p>
            <button
              type="button"
              className="block text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-xl px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 transition duration-300 gap-4"
            >
              Download CV
              <i
                className="uil uil-file-download block text-3xl -mt-1"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <li className="card w-[90px]  sm:w-[120px] lg:w-[150px] text-center bg-white border-2 py-3 lg:py-5 px-2 lg:px-4 rounded-2xl">
      <i className={`${icon} text-2xl text-primary mb-2  block`}></i>
      <span className="text-[10px] sm:text-sm lg:text-base font-semibold text-title-dark block">
        {title}
      </span>
      <span className="text-[10px] text-subTitle">{text}</span>
    </li>
  );
}
