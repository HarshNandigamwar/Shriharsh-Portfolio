import React from "react";
import "../CustomBtn/CustomBtn.css";
const CustomBtn = () => {
  return (
    <div className="mainBTN">
      <button className="btn-53">
        <div className="original">Shriharsh .CV@latest</div>
        <div className="letters">
          <span>D</span>
          <span>o</span>
          <span>w</span>
          <span>n</span>
          <span>l</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8"
              />
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
};

export default CustomBtn;
