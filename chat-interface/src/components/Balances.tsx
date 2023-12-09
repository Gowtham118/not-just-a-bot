import { Balance } from "@ankr.com/ankr.js";
import { BalanceCard } from "./BalanceCard";

export const Balances = ({ balances }: { balances: Balance[] }) => {
  return (
    <div>
      <div className="text-2xl text-light-grey font-bold m-6 mb-0">
        Balances:-
      </div>
      <div className="flex flex-wrap  m-6 gap-x-6 gap-y-6">
        {balances.map((balance) => (
          <BalanceCard
            key={balance.balance}
            TokenName={balance.tokenName}
            Balance={balance.balance}
            URL={balance.thumbnail}
            Symbol={balance.tokenSymbol}
            chain={balance.blockchain}
          />
        ))}
      </div>
    </div>
  );
};
