import { useState } from "react";

const TransactionForm = ({ onTransaction }) => {
  const [transactionType, setTransactionType] = useState("Deposit");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    onTransaction({ type: transactionType, amount: parseFloat(amount) });
    setAmount(""); // Clear the form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 px-6 bg-white rounded-lg shadow-md w-1/3 m-2 max-w-md inline-block "
    >
      <h2 className="text-xl font-semibold mb-4">Make a Transaction</h2>

      {/* Transaction Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Transaction Type
        </label>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
        </select>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter amount"
          min="0"
          step="0.01"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
