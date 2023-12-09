export const BalanceCard = ({
  TokenName,
  Balance,
  URL,
  Symbol,
  chain,
}: {
  TokenName: string;
  Balance: string;
  URL: string;
  Symbol: string;
  chain: string;
}) => {
  return (
    <div className="font-bold text-2xl">
      <div className="bg-black rounded-xl flex flex-col p-4 gap-y-2 border-[1px] border-[#27272a]">
        <div className="text-sm font-normal text-light-grey">{chain}</div>
        <div className="flex gap-x-4">
          <img
            src={URL}
            alt="logo"
            className="w-16 h-16 bg-white rounded-full"
          />
          <div className="flex flex-col justify-center text-light-grey">
            <div>{TokenName}</div>
            <div className="text-xl">
              {Number(Balance).toFixed(4)}{" "}
              <span className="text-sm">{Symbol}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
