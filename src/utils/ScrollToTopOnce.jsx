import { useEffect } from "react";

const ScrollBelowFixedNavbarOnce = () => {
  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisitDone");

    if (!firstVisit) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      window.scrollTo({
        top: navbarHeight + 60,
        left: 0,
        behavior: "smooth",
      });

      sessionStorage.setItem("firstVisitDone", "true");
    }
  }, []);

  return null;
};

export default ScrollBelowFixedNavbarOnce;
