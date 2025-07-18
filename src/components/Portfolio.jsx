import { useState } from "react";
import SectionHeader from "./SharedComponents/SectionHeader";
import SectionWrapper from "./SharedComponents/SectionWrapper";
import GooeyNav from "../blocks/Components/GooeyNav/GooeyNav";
const projectsArr = [
  {
    icon: "/public/assets/Projects/DVLD.png",
    type: "desktop",
    name: "Driving License Management System (DVLD)",
    description:
      "A C# desktop app for managing driving license issuance, renewal, and verification with SQL Server support",
    demo: "https://vimeo.com/1056301250/53c69bb538",
    github: "https://github.com/Ishaaq-21/Driving-Management-System-",
    showFirst: true,
  },
  {
    icon: "/public/assets/Projects/PrayerTimes.png",
    type: "react",
    name: "Prayer Times for muslims",
    description:
      "Responsive app showing global prayer times, live clock, countdown, multilingual support, and AI Islamic assistant.",
    demo: "https://prayer-times-for-muslims.netlify.app/",
    github: "https://github.com/Ishaaq-21/Prayer-Times-React-App",
  },
  {
    icon: "/public/assets/Projects/Portfolio.png",
    type: "react",
    name: "My Portfolio",
    description:
      "A sleek, responsive web portfolio to showcase my projects, skills, and background, built with modern web technologies.",
    github: "https://github.com/Ishaaq-21/My-Portfolio",
  },

  {
    icon: "/public/assets/Projects/creative-mini.png",
    type: "Html-Css-Js",
    name: "Creative Agency Portfolio",
    description:
      "A modern, responsive website for a creative agency with interactive sections, theme customization — built using HTML, CSS, and JavaScript.",
    demo: "https://ishaaq-21.github.io/Creative-Agency/",
    github: "https://github.com/Ishaaq-21/Creative-Agency",
  },
  {
    icon: "/public/assets/Projects/dash.png",
    type: "Html-Css",
    name: "Admin Dashboard Template",
    description:
      "A modern admin dashboard with task, file, and project management features. Built for clarity, responsiveness, and smooth user workflows.",
    demo: "https://ishaaq-21.github.io/Admin-Dashboard/",
    github: "https://github.com/Ishaaq-21/Admin-Dashboard",
  },
  {
    icon: "/public/assets/Projects/master-mini.png",

    type: "Html-Css",
    name: "Master Template",
    description:
      "A clean, multipurpose business template with sections for articles, features, and testimonials. Ideal for scalable, professional websites.",
    demo: "https://ishaaq-21.github.io/Html-Css-Template-master/",
    github: "https://github.com/Ishaaq-21/Html-Css-Template-master",
  },
  {
    icon: "/public/assets/Projects/todo.png",
    type: "react",
    name: "Todo App",
    description:
      "Modern, responsive todo app with full CRUD, filtering, local storage, and context-driven state using React, Material-UI, and Vite.",
    demo: "https://ishaaq-21.github.io/React-TodoApp/",
    github: "https://github.com/Ishaaq-21/React-TodoApp",
  },
  {
    icon: "/public/assets/Projects/leon.png",
    type: "Html-Css",
    name: "Leon Template",
    description:
      "A sleek landing template with services, portfolio, and pricing sections. Built using Flexbox, Grid, and polished animations.",
    demo: "https://ishaaq-21.github.io/Html-Css-Leon-template/",
    github: "https://github.com/Ishaaq-21/Html-Css-Leon-template",
  },
  {
    icon: "/public/assets/Projects/kasper-mini.png",
    type: "Html-Css",
    name: "Kasper Template",
    description:
      "A minimalist portfolio template with animated sections and a responsive layout. Great for freelancers or creative agencies.",
    demo: "https://ishaaq-21.github.io/Html-Css-Kasper-Template/",
    github: "https://github.com/Ishaaq-21/Html-Css-Kasper-Template",
  },
  {
    icon: "/public/assets/Projects/miniJs.png",
    type: "Html-Css-Js",
    name: "Mini-Projects",
    description:
      "A web app with four interactive sections: custom cursor effects, typing animation, live calendar, and city-based weather forecast.",
    demo: "https://ishaaq-21.github.io/Vanilla-Js-Mini-Projects/",
    github: "https://github.com/Ishaaq-21/Vanilla-Js-Mini-Projects",
  },
];
function ProjectCard({ project }) {
  return (
    <li className="project-card border-8 h-[220px] md:h-[260px] rounded-3xl border-primary/30 overflow-hidden relative">
      <img
        className="w-full h-full transition duration-500"
        src={project.icon}
        alt={`${name} project icon`}
        loading="lazy"
      />
      <div className="project-description flex flex-col gap-y-3 items-center justify-center text-center bg-black/80 w-full h-full absolute left-0 top-0 px-3 md:px-5 py-4 opacity-0 invisible transition duration-1000">
        <h3 className="text-base md:text-xl text-primary font-bold">
          {project.name}
        </h3>
        <p className="text-xs md:text-sm lg:text-base font-semibold text-white">
          {project.description}
        </p>
        <div className="links flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="hover:scale-125 transition duration-300"
          >
            <i className="uil uil-github text-primary text-4xl"></i>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="hover:scale-125 transition duration-300"
            >
              <i className="uil uil-eye text-primary text-4xl"></i>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

function showLessProjects() {
  let lessProjects = [];
  for (let i = 0; i < projectsArr.length; i++) {
    if (i === 6) break;
    console.log(projectsArr[i].name);
    lessProjects.push(projectsArr[i]);
  }
  console.log("type ========================== " + typeof ulElements);
  return lessProjects;
}
const items = [{ label: "Home" }, { label: "About" }, { label: "Contact" }];
export default function Portfolio() {
  const [filter, setFilter] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const lessProjects = showLessProjects();
  const finalProjectsArr = showMore ? projectsArr : lessProjects;
  return (
    <section className="Portfolio px-7 md:px-12 py-12 lg:py-16 relative  ">
      <SectionHeader title={"Portfolio"} subTitle={"My Work"} />
      {/* <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[5]}
      /> */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {finalProjectsArr.map((projectItem) => {
          return <ProjectCard project={projectItem} />;
        })}
      </ul>
      <button
        className="main-btn !block !mx-auto mt-8"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
