import { useForm, ValidationError } from "@formspree/react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useState } from "react";
function CustomSnackBar({ opening }) {
  const [open, setOpen] = useState(true); // Snackbar is closed by default

  // ✅ This function will close the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return; // prevent closing on outside click
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        sx={{}}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "white", color: "#f59e0b" }}
        >
          Thanks ! Your inquiry has been sent successfully
        </Alert>
      </Snackbar>
    </>
  );
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaleqgg");

  return (
    <div className="contact flex flex-col  items-center gap-y-5">
      <h2 className="text-subTitle dark:text-zinc-100/80 font-bold text-xl md:text-2xl  mb-3 ">
        Submit Your Inquiry
      </h2>
      <form
        onSubmit={handleSubmit}
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
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="block  dark:bg-slate-900 w-full  py-4 pl-5 pr-4 text-base font-semi-bold rounded-xl border-[#ccc] dark:border-primary-light border-2 relative mb-8 placeholder:dark:text-white/80 placeholder:font-semibold  dark:caret-primary cursor-target"
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
            required
            placeholder="Your Email"
            className="block dark:bg-slate-900 w-full  py-4 pl-5 pr-4 text-base font-semi-bold rounded-xl border-[#ccc] dark:border-primary-light border-2 relative mb-8 placeholder:dark:text-white/80 placeholder:font-semibold  dark:caret-primary cursor-target"
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
            className="block resize-none dark:bg-slate-900 w-full sm:w-80 py-4 pl-5 pr-4 text-base  font-semi-bold rounded-xl border-[#ccc] dark:border-primary-light border-2 h-56 relative mb-16 placeholder:dark:text-white/80 placeholder:font-semibold dark:caret-primary cursor-target"
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
            disabled={state.submitting}
            className="main-btn cursor-target"
          >
            Send Message{" "}
            <i className="uil uil-message block -rotate-45 text-2xl -mt-1"></i>
          </button>
        </div>
      </form>
      {state.succeeded && <CustomSnackBar opening={state.succeeded} />}
    </div>
  );
}
