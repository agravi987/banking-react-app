import { useState } from "react";

const Dashboard = ({ user, logout }) => {
  const [balance, setBalance] = useState(user.balance);
  const [amount, setAmount] = useState("");

  // Handle deposit
  const handleDeposit = () => {
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
    setBalance(balance + parseFloat(amount));
    alert("Deposit successful!");
    setAmount("");
  };

  // Handle withdrawal
  const handleWithdrawal = () => {
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
    if (amount > balance) {
      alert("Insufficient balance!");
      return;
    }
    setBalance(balance - parseFloat(amount));
    alert("Withdrawal successful!");
    setAmount("");
  };

  return (
    <div className=" flex flex-col rounded-lg items-center bg-gradient-to-br from-violet-600 to-violet-900 p-6 text-white">
      <div className="w-full max-w-3xl bg-white text-violet-900 rounded-lg shadow-lg p-8 space-y-6">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          Welcome, {user.username}!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Details */}
          <div className="p-4 bg-violet-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Account Details</h3>
            <p>
              <span className="font-semibold">Account Type:</span>{" "}
              {user.accountType}
            </p>
            <p>
              <span className="font-semibold">Account Number:</span>{" "}
              {user.accountNumber}
            </p>
          </div>
          {/* Balance Section */}
          <div className="p-4 bg-violet-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Balance</h3>
            <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
          </div>
        </div>

        {/* Transaction Section */}
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <div className="flex space-x-4">
            <button
              onClick={handleDeposit}
              className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition duration-300"
            >
              Deposit
            </button>
            <button
              onClick={handleWithdrawal}
              className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition duration-300"
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
