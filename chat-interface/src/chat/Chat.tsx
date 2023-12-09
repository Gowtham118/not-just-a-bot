// src/ChatInterface.tsx

import React from "react";
// import { Welcome } from "./Welcome";
import { CgProfile } from "react-icons/cg";
import { BiLogoFirebase } from "react-icons/bi";

export const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between w-4/5 mx-auto pt-6">
      <div>
        {/* <Welcome /> */}
        <div className="text-light-grey p-4">
          <div className="flex gap-x-6 items-center">
            <CgProfile className={"w-8 h-8"} />
            <p>Username</p>
          </div>
        </div>
        <hr className="border-[#27272a] w-[90%] mx-auto m-4" />
        <div className="text-light-grey p-4">
          <div className="flex gap-x-6 items-center">
            <BiLogoFirebase className={"w-8 h-8"} />
            <p>Hello! how can we help you today?</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-black w-[80%] mx-auto border-[1px] border-[#27272a] rounded-xl">
        <div className="flex mx-auto w-[90%] border-[1px] border-[#27272a]  rounded-xl bg-black">
          <input
            placeholder="Type a message to send..."
            className="mt-auto p-6 rounded-xl bg-black outline-none text-white w-full"
          />
          <button className="text-white px-6 rounded-xl border-[1px] border-[#27272a]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
