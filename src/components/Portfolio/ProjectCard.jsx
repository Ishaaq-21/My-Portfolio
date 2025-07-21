export default function ProjectCard({ project }) {
  return (
    <li className="project-card border-4 border-primary dark:border-primary place-content-center h-[220px] md:h-[260px] max rounded-3xl  overflow-hidden relative">
      <img
        className="w-full h-full transition duration-500"
        src={project.icon}
        alt={`${project.name} project icon`}
        loading="lazy"
      />
      <div className="project-description flex flex-col gap-y-3 items-center justify-center text-center bg-black/80 w-full h-full absolute left-0 top-0 px-3 md:px-5 py-4 opacity-0 invisible transition duration-1000">
        <h3 className="text-base md:text-xl text-primary font-bold">
          {project.name}
        </h3>
        <p className="text-xs md:text-sm  font-semibold text-white">
          {project.description}
        </p>
        <div className="links flex gap-4">
          <a
            rel="noopener noreferrer"
            href={project.github}
            target="_blank"
            className="hover:scale-125 transition duration-300"
          >
            <i className="uil uil-github text-primary text-4xl"></i>
          </a>
          {project.demo && (
            <a
              rel="noopener noreferrer"
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
