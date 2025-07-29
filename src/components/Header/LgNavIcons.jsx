/*



The following are icons for lg screens navbar




*/

const HomeIcon = () => {
  return (
    <>
      <svg
        className="w-8 h-8 stroke-slate-500 dark:stroke-zinc-200 group-hover:scale-90 transition duration-300"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Home</title>
        <path d="M4 16 L16 4 L28 16 V 28 H20 V20 H12 V28 H4 Z" />
      </svg>
      {/* <!-- Top Layer (Animated, Colored) --> */}
      <svg
        className="w-8 h-8 stroke-amber-500 absolute inset-0 group-hover:scale-90 "
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Home</title>
        <g className="draw-me">
          <path d="M4 16 L16 4 L28 16 V 28 H20 V20 H12 V28 H4 Z" />
        </g>
      </svg>
    </>
  );
};

const AboutIcon = () => {
  return (
    <>
      <svg
        className="w-8 h-8 stroke-slate-500 dark:stroke-zinc-200 group-hover:scale-90 transition duration-300"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>About</title>
        <path d="M28,16 A12,12 0 1,1 4,16 A12,12 0 1,1 28,16" />
        <circle cx="16" cy="13" r="4" />
        <path d="M22,25 C22,21 19.31,18 16,18 C12.69,18 10,21 10,25 Z" />
      </svg>
      {/* <!-- Top Layer (Animated, Colored) --> */}
      <svg
        className="w-8 h-8 stroke-amber-500 absolute inset-0 transition-transform duration-300 group-hover:scale-90"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>About</title>
        <path
          className="draw-me"
          d="M28,16 A12,12 0 1,1 4,16 A12,12 0 1,1 28,16"
        />
        <g className="draw-me silhouette">
          <circle cx="16" cy="13" r="4" />
          <path d="M22,25 C22,21 19.31,18 16,18 C12.69,18 10,21 10,25 Z" />
        </g>
      </svg>
    </>
  );
};

const SkillsIcon = () => {
  return (
    <>
      <svg
        className="w-8 h-8 stroke-slate-500 dark:stroke-zinc-200 group-hover:scale-90 transition duration-300"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Skills</title>
        <path d="M10 24 L4 16 L10 8" />
        <path d="M22 8 L28 16 L22 24" />
        <path d="M18 7 L14 25" />
      </svg>
      {/* <!-- Top Layer (Animated, Colored) --> */}
      <svg
        className="w-8 h-8 stroke-amber-500 absolute inset-0  group-hover:scale-90"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Skills</title>
        <path
          className="draw-me"
          style={{ transitionDelay: "0s" }}
          d="M10 24 L4 16 L10 8"
        />
        <path
          className="draw-me"
          style={{ transitionDelay: "0.2s" }}
          d="M22 8 L28 16 L22 24"
        />
        <path
          className="draw-me"
          style={{ transitionDelay: "0.4s" }}
          d="M18 7 L14 25"
        />
      </svg>
    </>
  );
};
const PortfolioIcon = () => {
  return (
    <>
      <svg
        className="w-8 h-8 stroke-slate-500 dark:stroke-zinc-100 group-hover:scale-90 transition duration-300"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Portfolio</title>
        <rect x="6" y="6" width="8" height="8" rx="1" />
        <rect x="18" y="6" width="8" height="8" rx="1" />
        <rect x="6" y="18" width="8" height="8" rx="1" />
        <rect x="18" y="18" width="8" height="8" rx="1" />
      </svg>
      <svg
        className="w-8 h-8 stroke-amber-500 absolute inset-0 group-hover:scale-90"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Portfolio</title>
        <rect
          className="scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 origin-center"
          x="6"
          y="6"
          width="8"
          height="8"
          rx="1"
        />
        <rect
          className="scale-0 group-hover:scale-100 transition-transform duration-500 delay-200 origin-center"
          x="18"
          y="6"
          width="8"
          height="8"
          rx="1"
        />
        <rect
          className="scale-0 group-hover:scale-100 transition-transform duration-500 delay-300 origin-center"
          x="6"
          y="18"
          width="8"
          height="8"
          rx="1"
        />
        <rect
          className="scale-0 group-hover:scale-100 transition-transform duration-500 delay-400 origin-center"
          x="18"
          y="18"
          width="8"
          height="8"
          rx="1"
        />
      </svg>
    </>
  );
};

const ContactIcon = () => {
  return (
    <>
      <svg
        className="w-8 h-8 stroke-slate-500 dark:stroke-zinc-100 group-hover:scale-90 transition duration-300"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Contact</title>
        <rect x="4" y="8" width="24" height="16" rx="2" />
        <path d="M4 8 L16 18 L28 8" />
      </svg>
      <svg
        className="w-8 h-8 stroke-amber-500 absolute inset-0 group-hover:scale-90"
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Contact</title>
        <rect className="draw-me" x="4" y="8" width="24" height="16" rx="2" />
        <path className="envelope-flap" d="M4 8 L16 18 L28 8" />
      </svg>
    </>
  );
};

export { HomeIcon, AboutIcon, SkillsIcon, PortfolioIcon, ContactIcon };
