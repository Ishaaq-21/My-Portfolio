import { useEffect, useState } from "react";

export default function ScrollBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`Scroll-caontainer bg-zinc-300 fixed w-2  h-44 right-3 sm:right-5 top-[calc(50%+20px)] -translate-y-1/2 rounded-2xl overflow-hidden shadow-lg`}
    >
      <div
        style={{ height: `${scrollProgress}%` }}
        className={`absolute w-full  bg-primary top-0 left-0 rounded-2xl`}
      ></div>
    </div>
  );
}
