import React from "react";

export const Center = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center h-full bg-gray-50 p-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
                {children}
            </div>
        </div>
    );
};
