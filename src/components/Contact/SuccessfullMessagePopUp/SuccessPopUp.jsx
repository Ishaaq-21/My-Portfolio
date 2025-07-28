const PopupCard = ({ isOpen, onClose, name }) => {
  return (
    // Popup Overlay
    <div
      onClick={onClose}
      className={`my-target fixed  z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out w-full h-full top-0 left-0 
      invisible opacity-0 ${isOpen && "!opacity-100 !visible"}`}
    >
      {/* Popup Card */}
      {/* stopPropagation prevents clicks inside the card from closing the modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-11/12 max-w-md transform-gpu rounded-2xl bg-[#ffffff] p-8 text-center text-[#10121B] shadow-lg transition-all  duration-300 ease-in-out dark:bg-[#1a1d2d] dark:text-[#f0f0f0] shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.2)]`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl leading-none opacity-70 transition-opacity hover:opacity-100 cursor-target p-2"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Icon */}
        <div className="mb-4 text-5xl" style={{ color: "#FCA61F" }}>
          &#10004;
        </div>

        {/* Content */}
        <h2 className="mb-3 text-2xl font-bold font-mono">Success!</h2>
        <p className="mb-2 font-mono text-base leading-relaxed opacity-80">
          Your message has been sent. I'll get back to you as soon as possible.
        </p>
        <p className="mb-8 font-mono text-base leading-relaxed opacity-80">
          Thanks <span className="font-semibold text-primary-dark">{name}</span>{" "}
          for reaching out!
        </p>

        {/* Action Buttons */}
        {/* title color is just near black color */}
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-center">
          <button
            onClick={onClose}
            className="font-mono rounded-lg border-2 border-primary hover:border-title bg-title hover:bg-primary dark:bg-zinc-100 dark:hover:bg-primary-dark px-6 py-3 font-bold dark:text-title text-white/90 transition-all duration-300  hover:text-title cursor-target"
          >
            Awesome!
          </button>
          <button
            onClick={onClose}
            className="font-mono rounded-lg border-2 border-title hover:border-primary-dark dark:border-[#ccc] dark:hover:border-primary bg-transparent hover:bg-[#ccc] dark:hover:bg-white text-[var(--secondary-btn-text-light)] px-6 py-3 font-bold  transition-all duration-300   dark:text-[var(--accent-color)] dark:hover:bg-opacity-10 dark:hover:bg-[var(--accent-color)] cursor-target"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopupCard;
