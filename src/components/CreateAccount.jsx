import { useState } from "react";

const CreateAccount = ({ createAccount, setShowCreateAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("Savings");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(username, password, accountType, accountNumber);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-white rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4 text-violet-700">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            placeholder="Enter your username"
            type="text"
            className="w-full border rounded p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Account Type</label>
          <select
            className="w-full border rounded p-2"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Account Number
          </label>
          <input
            placeholder="Enter your account number"
            type="text"
            className="w-full border rounded p-2"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800"
          >
            Create Account
          </button>
          <button
            type="button"
            className="text-violet-700 hover:underline"
            onClick={() => setShowCreateAccount(false)}
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
