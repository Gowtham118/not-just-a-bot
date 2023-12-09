import { BiLogoFirebase } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

export const ServerResponse = ({ data }: { data: string }) => {
  let respJson;
  try {
    respJson = JSON.parse(data);
    console.log("Valid JSON:", respJson);
  } catch (error) {
    /* empty */
  }
  return (
    <div className="text-light-grey p-2">
      <div className="flex gap-x-6 items-center">
        <BiLogoFirebase className={"w-8 h-8"} />
        {!respJson && <p>{data}</p>}
        {respJson && respJson.intent === IntentTypes.TransferAmount && (
          <TransferAmount slots={respJson.slots} />
        )}
        {respJson && respJson.intent === IntentTypes.CrossChainTrade && (
          <CrossChainTrade slots={respJson.slots} />
        )}
        {respJson && respJson.intent === IntentTypes.DexTrade && (
          <DexTrade slots={respJson.slots} />
        )}
      </div>
    </div>
  );
};

export const IntentTypes = {
  CrossChainTrade: "CrossChainTrade",
  TransferAmount: "TransferAmount",
  DexTrade: "DexTrade",
};

export type TransferAmount = {
  chain: string;
  toAccount: string;
  sendAmount: string;
  sendAsset: string;
};
export type CrossChainTrade = {
  fromchain: string;
  tochain: string;
  fromamount: string;
  fromasset: string;
  toAsset: string;
};
export type DexTrade = {
  chain: string;
  fromAmount: string;
  fromAsset: string;
  toAsset: string;
};

export const TransferAmount = ({ slots }) => {
  return (
    <div className="bg-black p-6 rounded-xl border-[1px] border-[#27272a] flex flex-col gap-y-2">
      <div className="font-bold">TRANSFER:-</div>
      <div>Network:- {slots.chain}</div>
      <div className="flex gap-x-4 items-center">
        {slots.sendAmount} {slots.sendAsset} <FaArrowRightLong />
        {slots.toAccount}
      </div>
      <div className="flex justify-center">
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg bg-white text-black m-2">
          Continue
        </button>
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg m-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export const CrossChainTrade = ({ slots }) => {
  return (
    <div className="bg-black p-6 rounded-xl border-[1px] border-[#27272a] flex flex-col gap-y-2">
      <div className="font-bold">Cross Chain Trade:-</div>
      <div className="flex gap-x-4 items-center">
        Network:- {slots.fromchain} <FaArrowRightLong /> {slots.tochain}
      </div>
      <div className="flex gap-x-4 items-center">
        {slots.fromamount} {slots.fromasset} <FaArrowRightLong />
        {slots.toAsset}
      </div>
      <div className="flex justify-center">
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg bg-white text-black m-2">
          Continue
        </button>
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg m-2">
          Cancel
        </button>
      </div>
    </div>
  );
};
export const DexTrade = ({ slots }) => {
  return (
    <div className="bg-black p-6 rounded-xl border-[1px] border-[#27272a] flex flex-col gap-y-2">
      <div className="font-bold">Cross Chain Trade:-</div>
      <div className="flex gap-x-4 items-center">Network:- {slots.chain}</div>
      <div className="flex gap-x-4 items-center">
        {slots.fromAmount} {slots.fromAsset} <FaArrowRightLong />
        {slots.toAsset}
      </div>
      <div className="flex justify-center">
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg bg-white text-black m-2">
          Continue
        </button>
        <button className="border-[1px] border-[#27272a] px-4 py-2 rounded-lg m-2">
          Cancel
        </button>
      </div>
    </div>
  );
};
