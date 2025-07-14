export default function MainImg() {
  return (
    <div className="image rounded-full  ring-8 ring-primary w-48 max-w-48 h-48 max-h-48 lg:w-80 lg:max-w-80 md:w-60 md:max-w-60 md:h-60 md:max-h-60 lg:h-80 lg:max-h-80   overflow-hidden order-1 md:order-2 mx-auto -translate-x-5 my-5 md:my-5 mx-auto lg:mx-0 lg:grow-[1]">
      <img
        className="w-full h-full "
        src="/public/assets/MyPic.png"
        alt="Isaac's Picture"
      />
    </div>
  );
}
