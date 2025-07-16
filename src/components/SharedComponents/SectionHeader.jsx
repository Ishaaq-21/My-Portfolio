export default function SectionHeader({ title, subTitle }) {
  return (
    <div className="mb-14">
      <h1 className="text-title font-bold w-fit  mx-auto text-3xl lg:text-5xl">
        {title}
      </h1>
      <h4 className="text-subTitle text-sm w-fit mx-auto mt-1">{subTitle}</h4>
    </div>
  );
}
