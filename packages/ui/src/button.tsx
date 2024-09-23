"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-2.5 mb-2 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </button>
  );
};
