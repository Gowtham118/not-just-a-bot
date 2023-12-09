export const Transactions = ({ transactions }: { transactions: any }) => {
  console.log("transactions :", transactions);
  return (
    <div className="w-[80%] m-6">
      <div className="text-2xl font-bold  mb-0">Transactions:-</div>
      {transactions.map((transaction, i) => (
        <div key={i}>
          <div>
            {transaction.chain} {i}
          </div>
          <table>
            <tbody>
              <tr>
                <th>Sno.</th>
                <th>Transaction Hash</th>
                <th>Type</th>
                <th>Transaction</th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
