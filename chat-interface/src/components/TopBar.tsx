import { useParams } from "react-router-dom";

export const TopBar = () => {
  const { address } = useParams();
  return (
    <div className="sticky bg-black text-white z-50 p-4 w-full h-16 border-b-[1px] border-[#27272a] flex justify-between items-center">
      <h1 className="text-2xl font-semibold">N A T T Y</h1>
      <div className="cursor-pointer">{address}</div>
    </div>
  );
};
