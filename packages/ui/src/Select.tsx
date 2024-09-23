"use client";

export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return (
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-150 ease-in-out hover:bg-gray-100"
        >
            {options.map(option => (
                <option key={option.key} value={option.key}>
                    {option.value}
                </option>
            ))}
        </select>
    );
};
