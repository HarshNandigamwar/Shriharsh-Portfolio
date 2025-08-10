import React from "react";

// Example props: loading (bool), children (button text)
function LoadingButton({ loading, children, type, ...props }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center px-4 py-2 rounded mt-4 mb-5 bg-black/30 border border-gray-500/30 text-white font-semibold shadow hover:border-gray-500/50 transition-all duration-300 disabled:opacity-60 ${
        loading ? "cursor-not-allowed" : ""
      }`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-60"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {loading ? "Loading..." : children}
    </button>
  );
}

export default LoadingButton;
