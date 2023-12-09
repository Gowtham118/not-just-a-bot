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
      <div className="bg-white rounded-xl flex flex-col p-4">
        <div className="text-sm font-normal">{chain}</div>
        <div className="flex gap-x-4">
          <img src={URL} alt="logo" className="w-16 h-16" />
          <div className="flex flex-col justify-center">
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
