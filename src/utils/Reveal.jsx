import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
  children,
  once = false,
  y = 40, // smaller offset for faster look
  duration = 0.1, // quicker animation
  delay = 0.1,
  ease = "power2.out", // faster easing curve
  stagger = 0.1, // quick stagger
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const targets = gsap.utils.toArray(el.children);

    gsap.set(targets, {
      opacity: 0,
      y,
      willChange: "opacity, transform",
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 10%",
      once,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          stagger,
        });
      },
      onEnterBack: () => {
        if (!once) {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease,
            stagger,
          });
        }
      },
      onLeave: () => {
        if (!once) {
          gsap.set(targets, { opacity: 0, y });
        }
      },
      onLeaveBack: () => {
        if (!once) {
          gsap.set(targets, { opacity: 0, y });
        }
      },
    });

    return () => trigger.kill();
  }, [once, y, duration, delay, ease, stagger]);

  return <div ref={containerRef}>{children}</div>;
}
