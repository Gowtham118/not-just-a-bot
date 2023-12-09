import { BiLogoFirebase } from "react-icons/bi";

export const ServerResponse = ({ data }: { data: string }) => {
  return (
    <div className="text-light-grey p-2">
      <div className="flex gap-x-6 items-center">
        <BiLogoFirebase className={"w-8 h-8"} />
        <p>{data}</p>
        {/* intent based cards */}
      </div>
    </div>
  );
};

export const intentTypes = {
  CrossChainTrade: "CrossChainTrade",
  TransferAmount: "TransferAmount",
  DexTrade: "DexTrade",
};

export const TransferAmount = () => {
  return <div>Transfer Amount</div>;
};
