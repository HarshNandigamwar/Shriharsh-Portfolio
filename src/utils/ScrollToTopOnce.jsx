// import { useEffect } from "react";

// const ScrollBelowFixedNavbarOnce = () => {
//   useEffect(() => {
//     const firstVisit = sessionStorage.getItem("firstVisitDone");

//     if (!firstVisit) {
//       const navbar = document.querySelector("nav");
//       const navbarHeight = navbar ? navbar.offsetHeight : 80;
//       window.scrollTo({
//         top: navbarHeight + 60,
//         left: 0,
//         behavior: "smooth",
//       });

//       sessionStorage.setItem("firstVisitDone", "true");
//     }
//   }, []);

//   return null;
// };

// export default ScrollBelowFixedNavbarOnce;

import { useEffect } from "react";

const ScrollBelowFixedNavbarOnce = () => {
  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisitDone");

    if (!firstVisit) {
      const scrollAfterLayout = () => {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        window.scrollTo({
          top: navbarHeight + 20, // thoda padding
          left: 0,
          behavior: "smooth",
        });
      };

      // Wait for layout to finish
      requestAnimationFrame(scrollAfterLayout);

      // Optional: fallback if layout takes longer
      setTimeout(scrollAfterLayout, 100);

      sessionStorage.setItem("firstVisitDone", "true");
    }
  }, []);

  return null;
};

export default ScrollBelowFixedNavbarOnce;

