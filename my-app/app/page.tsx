import { FaCircleCheck } from "react-icons/fa6";
import IntroButtons from "./components/IntroButtons";

export default function Page() {
  return (
    <div className="bg-red-500 h-screen flex flex-col items-center">
      <div className="p-4"></div>
      <div className="flex items-center  bg-red-500 h-14 w-6/12 ">
        <FaCircleCheck />
        <h1 className=" text-white font-extrabold text-xl px-2">Pomofocus</h1>
        <div className="pr-72"></div>
        <IntroButtons></IntroButtons>
      </div>
      <hr className="w-6/12 bg-gray-200 border-1 dark:bg-gray-200"></hr>
    </div>
  );
}  