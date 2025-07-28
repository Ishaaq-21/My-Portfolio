import { useForm, ValidationError } from "@formspree/react";

import { useState } from "react";

import PopupCard from "./SuccessfullMessagePopUp/SuccessPopUp";
import { form } from "framer-motion/client";

let formInputs = {
  name: "",
  email: "",
  message: "",
};
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaleqgg");
  const [formInputsObj, setFormInputsObj] = useState(formInputs);
  const [formSent, setFormSent] = useState(false);
  const handlePopUpClosing = () => {
    setFormSent(false);
    setFormInputsObj(formInputs);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    handleSubmit(e);
  };

  return (
    <div className="contact flex flex-col  items-center gap-y-5">
      <h2 className="text-subTitle dark:text-zinc-100/80 font-bold text-xl md:text-2xl  mb-3 ">
        Submit Your Inquiry
      </h2>
      <form
        onSubmit={handleFormSubmit}
        action={"https://formspree.io/f/mqaleqgg"}
        method="POST"
      >
        <div className="relative w-full sm:w-80">
          <label
            className="dark:bg-[linear-gradient(to_bottom,_rgb(2_6_23)_50%,_rgb(15_23_42)_50%)] dark:text-white/90"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            value={formInputsObj.name}
            onChange={(e) => {
              setFormInputsObj({ ...formInputsObj, name: e.target.value });
            }}
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="cursor-target"
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <div className="relative w-full sm:w-80">
          <label
            className="dark:bg-[linear-gradient(to_bottom,_rgb(2_6_23)_50%,_rgb(15_23_42)_50%)] dark:text-white/90"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formInputsObj.email}
            onChange={(e) => {
              setFormInputsObj({ ...formInputsObj, email: e.target.value });
            }}
            required
            placeholder="Your Email"
            className="cursor-target"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="relative w-full sm:w-80">
          <label
            className="dark:bg-[linear-gradient(to_bottom,_rgb(2_6_23)_50%,_rgb(15_23_42)_50%)] dark:text-white/90"
            htmlFor="Inquiry"
          >
            Your inquiry
          </label>
          <textarea
            value={formInputsObj.message}
            onChange={(e) => {
              setFormInputsObj({ ...formInputsObj, message: e.target.value });
            }}
            className="resize-none sm:w-80 h-56 !mb-16 cursor-target"
            name="inquiry"
            required
            id="inquiry"
            placeholder="Write Your Inquiry"
          />
        </div>
        <ValidationError
          prefix="Inquiry"
          field="inquiry"
          errors={state.errors}
        />
        <div className="w-fit mx-auto md:mx-0">
          <button
            type="submit"
            disabled={formSent}
            className="main-btn cursor-target"
          >
            Send Message{" "}
            <i className="uil uil-message block -rotate-45 text-2xl -mt-1"></i>
          </button>
        </div>
      </form>
      <PopupCard
        isOpen={formSent}
        name={formInputsObj.name}
        onClose={handlePopUpClosing}
      />
    </div>
  );
}
