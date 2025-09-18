import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 flex flex-col items-start gap-y-10">
      <div className="w-full flex flex-col items-center gap-4 mt-8">
        <span className="text-center text-sm text-purple-500">
          Made with <span className="text-red-500">❤️</span> by Shriharsh.
        </span>
        <div className="text-[13px]">
          {" "}
          &#169; {new Date().getFullYear()} Shriharsh Nandigamwar. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
