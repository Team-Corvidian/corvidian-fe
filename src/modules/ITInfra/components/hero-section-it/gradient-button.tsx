"use client";
import React from "react";

const GradientButton = ({ text }: { text: string }) => {
  return (
    <button
      className="relative inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl
                 bg-[#1D1F26] 
                 before:absolute before:inset-0 before:rounded-xl before:p-[2px]
                 before:bg-gradient-to-r before:from-[#02C2B3] before:via-[#1D1F26] before:to-[#1578CB]
                 before:-z-10 before:content-[''] 
                 hover:before:opacity-90 transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default GradientButton;
