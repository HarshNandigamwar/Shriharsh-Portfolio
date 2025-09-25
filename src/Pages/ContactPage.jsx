import React, { useRef } from "react";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
import MotionWrapper from "../utils/MotionWrapper";
const ContactPage = () => {
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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--text-color)] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-[var(--maintext-color)] mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <MotionWrapper direction="y">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <div className="text-accent text-xl">💌</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[var(--maintext-color)]">Email</h3>
                  <a
                    href="mailto:nandigamwarharsh@gmail.com"
                    className="text-[var(--maintext-color)]"
                  >
                    nandiganwarharsh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <div className="text-accent text-xl">📱</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[var(--maintext-color)]">Phone</h3>
                  <p className="text-[var(--maintext-color)]">+91 7517246260</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                {/* Social media link  */}
                <div className="flex space-x-4 text-[var(--maintext-color)]">
                  {/* Linkedin  */}
                  <a
                    href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=linkedin"
                      alt="linkedin"
                      className="h-11 w-11"
                    />
                  </a>

                  {/* GitHub   */}
                  <a href="https://github.com/HarshNandigamwar" target="_blank">
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="Github"
                      className="h-11 w-11"
                    />
                  </a>

                  {/* X */}
                  <a href="https://x.com/Harsh477011?s=09" target="_blank">
                    <img
                      src="https://skillicons.dev/icons?i=twitter"
                      alt="X"
                      className="h-11 w-11"
                    />
                  </a>
                </div>
              </div>
            </div>
          </MotionWrapper>
          {/* Contact Form */}

          <MotionWrapper direction="y">
            <div className="bg-dark-card p-8 rounded-xl">
              <form id="contact-form" className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name   */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-[var(--text-color)] font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-dark border border-gray-700 hover:border-[var(--text-color)] rounded-lg text-[var(--maintext-color)]"
                    />
                  </div>

                  {/* Email   */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[var(--text-color)] font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg hover:border-[var(--text-color)] text-[var(--maintext-color)]"
                    />
                  </div>
                </div>

                {/* Disc */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[var(--text-color)] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg hover:border-[var(--text-color)] text-[var(--maintext-color)]"
                  ></textarea>
                </div>
                {/* Error */}
                <span className="text-red-500">{result}</span>

                {/* Submit Button */}
                <LoadingButton
                  type={"submit"}
                  loading={loading}
                  children={"Send Message"}
                />
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
