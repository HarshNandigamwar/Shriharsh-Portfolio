import { useEffect } from "react";

const ScrollBelowFixedNavbarOnce = () => {
  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisitDone");

    if (!firstVisit) {
      const scrollAfterLayout = () => {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        window.scrollTo({
          top: navbarHeight + 20, // thoda extra padding
          left: 0,
          behavior: "smooth",
        });
      };

      // Wait for layout to finish
      requestAnimationFrame(scrollAfterLayout);
      setTimeout(scrollAfterLayout, 150); // fallback

      sessionStorage.setItem("firstVisitDone", "true");
    }
  }, []);

  return null;
};

export default ScrollBelowFixedNavbarOnce;

