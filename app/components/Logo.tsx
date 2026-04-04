import React from "react";

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Teal Square with Lightning Bolt */}
      <div className="w-10 h-10 bg-[#548C94] rounded-lg flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white fill-white"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      {/* Text: ELECTROBRUM ENERGY AUTOMATION */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tighter text-[#1A2442] dark:text-white uppercase">
          ELECTROBRUM
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#1A2442] dark:text-gray-400 uppercase">
          ENERGY AUTOMATION
        </span>
      </div>
    </div>
  );
};
