export default function MainImg() {
  return (
    <div
      className="profile-pic  w-48 max-w-48 h-48 max-h-48 md:w-60 md:max-w-60 md:h-60 md:max-h-60 lg:w-80 lg:max-w-80  lg:h-80 lg:max-h-80
      rounded-full  ring-8 ring-primary/70 overflow-hidden order-1 md:order-2
      mx-auto -translate-x-5 my-5 md:my-5 mx-auto lg:mx-0 lg:grow-[1]"
    >
      <picture>
        <source srcSet="/assets/MyPic.avif" type="image/avif" />
        <source srcSet="/assets/MyPic.png" type="image/png" />
        <img
          src="/assets/MyPic.png"
          alt="Isaac's Picture"
          className="w-full h-full"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
