import React from "react";

const BlinkDot = () => {
  return (
    <div className="flex items-center">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-purple-500 opacity-75"></span>
      </span>
    </div>
  );
};

export default BlinkDot;
