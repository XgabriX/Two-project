"use client";

import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import list from "./list.json";
import { GrNext } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import IntroButtons from "./components/IntroButtons";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-red-500 h-screen flex flex-col items-center">
      <div className="p-4"></div>
      <div className="flex items-center  bg-red-500 h-14 w-6/12 ">
        <FaCircleCheck />
        <h1 className=" text-white font-extrabold text-xl px-2">Pomofocus</h1>
        <div className="pr-72"></div>
        <IntroButtons></IntroButtons>
        <button onClick={() => setIsOpen((prev) => !prev)} className="Rounded-lg text-sm pr-2 pl-1 py-3 text-white">
          <ImMenu />
        </button>
        {isOpen && <div className="bg-red-100 absolute top-20 right-72 flex flex-col items- center text-center rounded-md py-2 px-2">
          {list.map((item, i) => (
            <div className="flex w-full justify-start items-center px-2 py-2 hover:bg-red-300 cursor-pointer rounded-r-lg border-l-transparent hover: border-l-red-900 border-l-4 text-red-950 text-sm" key={i}>
              <h3><GrNext /></h3>
              <h3>{item["Dropdown 1"]}</h3>
              <h3>{item["Dropdown 2"]}</h3>
              <h3>{item["Dropdown 3"]}</h3>
            </div>
          ))}
        </div>}
      </div>
      <hr className="w-6/12 bg-gray-200 border-1 dark:bg-gray-200"></hr>
    </div>
  );
}  