import React, { useRef } from "react";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "c9d96e3c-2460-4b34-b239-ec91dd8a8cb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      toast.success("Form submitted successfully", { autoClose: 3000 });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Form submission failed.", { autoClose: 3000 });
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[670px] py-10 flex flex-col items-start gap-y-10 "
    >
      <div className="space-y-2">
        <h3 className="text-3xl font-semibold">
          Let&apos;s <span className="text-slate-200">Connect</span>
        </h3>
        <p className="text-[#A1A1AA] text-sm">
          I&apos;m always excited to collaborate on interesting projects or just
          have a great tech conversation!
        </p>
      </div>

      <div className="w-full p-3 rounded-sm border bg-[#1a1a1a]/20 backdrop-blur-sm border-gray-500/10 hover:border-gray-500/20 transition-all duration-300">
        <div className="flex flex-col items-center justify-center gap-4">
          <form
            className="contactForm m-[1.5rem] flex flex-col items-center justify-center w-[100%] lg:w-[600px]  "
            onSubmit={onSubmit}
          >
            <input
            id="name"
              type="text"
              className="name font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-gray-500/10 hover:border-gray-500/50 transition-all duration-300  "
              placeholder="name"
              name="name"
              required
            />
                     <input
            id="email"
              type="email"
              className="email font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-gray-500/10 hover:border-gray-500/50 transition-all duration-300"
              placeholder="email"
              name="email"
              required
            />

            <textarea
            id="message"
              name="message"
              placeholder="message"
              rows={5}
              className="msg font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-[0.5rem] bg-black/30 border border-gray-500/10 hover:border-gray-500/50 transition-all duration-300"
              required
            ></textarea>

            <span>{result}</span>

            <LoadingButton
              type={"submit"}
              loading={loading}
              children={"Send Message"}
            />

            <div className="flex gap-[10px]">
              <a
                href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
  
                  alt="linkedin"
                  className="h-9 w-9"
                />
              </a>
              <a href="https://github.com/HarshNandigamwar" target="_blank">
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="Github"
                  className="h-9 w-9"
                />
              </a>
              <a
                href="https://x.com/Harsh477011?s=09"
                target="_blank"
              >
                <img
                  src="https://skillicons.dev/icons?i=twitter"
                  className="h-9 w-9"
                  alt="X"
                />
              </a>
            </div>
          </form>

          <p className="inline-block px-4 py-2 text-[13px] text-[#A1A1AA] bg-[#141414] rounded-sm ">
            💬 I typically respond within 30 Minutes!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
