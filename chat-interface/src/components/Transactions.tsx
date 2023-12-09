export const Transactions = ({ transactions }: { transactions: any }) => {
  return (
    <div className="w-[80%] m-6 h-[90vh] overflow-y-scroll">
      {transactions.map((transactionsOfChain, i) => (
        <div key={i}>
          <div className="text-light-grey text-2xl border-b-[1px] my-4 p-2">
            {transactionsOfChain.chain}
          </div>
          <table className="text-light-grey border-collapse w-full">
            <thead>
              <tr>
                <th className="p-2">Sno</th>
                <th className="p-2">Block Height</th>
                <th className="p-2">Tx Hash</th>
                <th className="p-2">Time</th>
                <th className="p-2">To Address</th>
                <th className="p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {transactionsOfChain.transactions.map((tx, index) => (
                <tr key={index}>
                  <td className="p-2 text-center">{index + 1}</td>
                  <td className="p-2 text-center">{tx.block_height}</td>
                  <td className="p-2 text-center">{tx.tx_hash}</td>
                  <td className="p-2 text-center">
                    {formatDate(tx.block_signed_at)}
                  </td>
                  <td className="p-2 text-center">
                    {trimAddress(tx.to_address)}
                  </td>
                  <td className="p-2 text-center">
                    {tx.value_quote.toFixed(4)} $
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export const trimAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Adjust the format as needed
};
