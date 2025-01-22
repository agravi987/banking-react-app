import { useState } from "react";

const Login = ({ login, setShowCreateAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4 text-violet-700">Login</h2>
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
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800"
          >
            Login
          </button>
          <button
            type="button"
            className="text-violet-700 hover:underline"
            onClick={() => setShowCreateAccount(true)}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
