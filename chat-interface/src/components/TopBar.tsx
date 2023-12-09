import { useParams } from "react-router-dom";

export const TopBar = () => {
  const { address } = useParams();
  return (
    <div className="bg-black text-white z-50 p-4 w-full border-b-[1px] border-[#27272a] flex justify-between ">
      <h1 className="text-2xl font-semibold">N A T T Y</h1>
      <div className="cursor-pointer">{address}</div>
    </div>
  );
};
