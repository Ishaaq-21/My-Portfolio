export default function ContactCard({ socialObj }) {
  return (
    <div className="flex w-[300px] flex-col justify-center items-center bg-white border-2 border-subtile rounded-2xl p-3 ">
      <i className={`${socialObj.icon} text-3xl text-primary block mb-2`}></i>
      <h4 className="text-dark text-xl font-bold mb-3">{socialObj.name}</h4>
      <p className="text-lg text-subTitle mb-2">{socialObj.data}</p>
      <a
        className="text-base text-subTitle group hover:text-primary transition duration-300"
        href={socialObj.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reach me out{" "}
        <i className="uil uil-angle-double-right transition duration-300 group-hover:translate-x-1 inline-block"></i>
      </a>
    </div>
  );
}
