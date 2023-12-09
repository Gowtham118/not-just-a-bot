// Sidebar.tsx
import React from "react";
import { MdHome } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";

const Sidebar = ({
  setCurrentDasshboard,
}: {
  setCurrentDasshboard: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="bg-black text-black h-[calc(100vh-65px)] w-[20%] py-6 border-r-[1px] border-[#27272a]">
      <ul className="flex flex-col gap-y-3 px-2">
        <li className="m-2 cursor-pointer">
          <div
            className="text-light-grey hover:text-white  flex items-center gap-x-2"
            onClick={() => setCurrentDasshboard("home")}
          >
            <MdHome className={"text-2xl"} />
            <div className="text-xl font-bold">Home</div>
          </div>
        </li>
        <li className="m-2 cursor-pointer">
          <div
            className="text-light-grey hover:text-white text-2xl flex items-center gap-x-2"
            onClick={() => setCurrentDasshboard("overview")}
          >
            <GrOverview className={"text-2xl"} />
            <div className="text-xl font-bold">Overview</div>
          </div>
        </li>
        <li className="m-2 cursor-pointer">
          <div
            className="text-light-grey hover:text-white text-2xl flex items-center gap-x-2"
            onClick={() => setCurrentDasshboard("transactions")}
          >
            <IoIosMenu className={"text-2xl"} />
            <div className="text-xl font-bold">Transactions</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
