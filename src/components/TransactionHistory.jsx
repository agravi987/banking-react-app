const TransactionHistory = ({ transactions = [] }) => {
  return (
    <div className="py-4 px-6 w-2/3 my-2 mx-4 bg-white text-black rounded-lg shadow-md p-4  inline-block">
      <h2 className="text-2xl font-bold mb-4 text-violet-600">
        Transaction History
      </h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-violet-500 text-white">
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Amount ($)</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
              >
                <td className="px-4 py-2">{transaction.type}</td>
                <td className="px-4 py-2">{transaction.amount.toFixed(2)}</td>
                <td className="px-4 py-2">
                  {new Date(transaction.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionHistory;
