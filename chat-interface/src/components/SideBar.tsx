// Sidebar.tsx
import React from "react";

const Sidebar = ({
  setCurrentDasshboard,
}: {
  setCurrentDasshboard: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="bg-black text-black h-[calc(100vh-65px)] w-[20%] p-6 border-r-[1px] border-[#27272a]">
      <ul>
        <li className="m-2 cursor-pointer">
          <div
            className="text-blue-300 hover:text-blue-500 text-2xl"
            onClick={() => setCurrentDasshboard("home")}
          >
            Home
          </div>
        </li>
        <li className="m-2 cursor-pointer">
          <div
            className="text-blue-300 hover:text-blue-500 text-2xl"
            onClick={() => setCurrentDasshboard("overview")}
          >
            Overview
          </div>
        </li>
        <li className="m-2 cursor-pointer">
          <div
            className="text-blue-300 hover:text-blue-500 text-2xl"
            onClick={() => setCurrentDasshboard("transactions")}
          >
            Transactions
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
