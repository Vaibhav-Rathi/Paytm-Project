"use client";

export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return (
        <div className="pt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                placeholder={placeholder}
            />
        </div>
    );
};
