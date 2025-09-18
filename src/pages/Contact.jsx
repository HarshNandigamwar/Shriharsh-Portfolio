import React, { useRef } from "react";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";
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
      setLoading(false);
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div id="contact" className="py-10 flex flex-col items-center gap-y-10 ">
      <div className="space-y-2">
        <h3 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500 text-center">
          Let&apos;s Connect
        </h3>
        <p className="text-[#A1A1AA] text-sm text-center">
          I&apos;m always excited to collaborate on interesting projects or just
          have a great tech conversation!
        </p>
      </div>

      <div className="w-full p-3 rounded-xl border border-purple-500 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <form
            className="contactForm m-[1.5rem] flex flex-col items-center justify-center w-[100%] lg:w-[600px]  "
            onSubmit={onSubmit}
          >
            <input
              id="name"
              type="text"
              className="name font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-xl bg-black/30 border border-purple-500 hover:border-gray-500/50 transition-all duration-300 placeholder-purple-500"
              placeholder="Name"
              name="name"
              required
            />

            <input
              id="email"
              type="email"
              className="email font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-xl bg-black/30 border border-purple-500 hover:border-gray-500/50 transition-all duration-300 placeholder-purple-500"
              placeholder="Email"
              name="email"
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              className="msg font-medium w-full max-w-[40rem] m-[0.5rem] p-[10px] text-white  rounded-xl bg-black/30 border border-purple-500 hover:border-gray-500/50 transition-all duration-300 placeholder-purple-500"
              required
            ></textarea>

            <span className="text-red-500">{result}</span>

            <LoadingButton
              type={"submit"}
              loading={loading}
              children={"Send Message"}
            />

            {/* mail */}
            <p className="inline-block px-4 py-2 text-[13px] text-[#A1A1AA] bg-[#141414] rounded-sm ">
              💬 I typically respond within 30 Minutes!
            </p>
            <p className="inline-block px-4 py-2 text-[13px] text-[#A1A1AA] bg-[#141414] rounded-sm mt-4 mb-4 ">
              <a href="mailto:nandigamwarharsh@gmail.com" target="_blank">
                💌 nandigamwarharsh@gmail.com
              </a>
            </p>
            {/* Social media link  */}
            <div className="flex gap-[10px]">
              {/* Linkedin  */}
              <motion.a
                href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="linkedin"
                  className="h-11 w-11"
                />
              </motion.a>
              {/* GitHub   */}
              <motion.a
                href="https://github.com/HarshNandigamwar"
                target="_blank"
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="Github"
                  className="h-11 w-11"
                />
              </motion.a>
              {/* X */}
              <motion.a
                href="https://x.com/Harsh477011?s=09"
                target="_blank"
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=twitter"
                  alt="X"
                  className="h-11 w-11"
                />
              </motion.a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
