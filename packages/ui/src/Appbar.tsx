import { Button } from "./button";
import { FaUserCircle } from "react-icons/fa"; // Importing a user icon
import { useRouter } from "next/navigation";


interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: () => void,
    onSignout: () => void
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center bg-[#B3AFAF] px-6 py-3 shadow-sm border-b border-gray-200">
            <div className="text-2xl font-medium text-gray-700">
                PayTM
            </div>
            <div className="flex items-center">
                <div className="text-gray-700 py-2 px-4 rounded-md transition-colors duration-200 inline-block mt-3">
                    <Button onClick={user ? onSignout : onSignin}>
                        {user ? "Logout" : "Login"}
                    </Button>
                </div>
                {/* Profile icon positioned to the right of the button */}
                <div className="ml-2 cursor-pointer" onClick={()=>{router.push("/Profile")}}>
                    <FaUserCircle className="text-5xl text-gray-700 hover:text-gray-900 transition-colors duration-200" />
                </div>
            </div>
        </div>
    );
};
