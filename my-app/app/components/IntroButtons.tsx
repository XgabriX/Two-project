import { RiBarChart2Fill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";



export default function IntroButtons() {
    return (
        <>
            <RiBarChart2Fill />
            <button type="button"
                className="Rounded-lg text-sm pr-2 pl-1 py-3 text-white">
                Report
            </button>

            <RiSettings5Fill />
            <button type="button"
                className="Rounded-lg text-sm pr-2 pl-1 py-3 text-white">
                Setting
            </button>

            <HiMiniUserCircle />
            <button type="button"
                className="Rounded-lg text-sm pr-2 pl-1 py-3 text-white">
                Sign in
            </button>
        </>
    )
}