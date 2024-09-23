import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
      <h1 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
        {title}
      </h1>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
