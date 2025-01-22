import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  const [accounts, setAccounts] = useState([
    {
      username: "admin",
      password: "password123",
      balance: 1000,
      accountType: "Savings",
      accountNumber: "1234567890",
    },
  ]); // Default account
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Add a new account
  const createAccount = (username, password, accountType, accountNumber) => {
    if (
      accounts.find(
        (acc) =>
          acc.username === username || acc.accountNumber === accountNumber
      )
    ) {
      alert("Username or Account Number already exists!");
      return;
    }
    setAccounts([
      ...accounts,
      { username, password, balance: 0, accountType, accountNumber },
    ]);
    alert("Account created successfully!");
    setShowCreateAccount(false); // Redirect back to login after account creation
  };

  // Log in a user
  const login = (username, password) => {
    const user = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );
    if (user) {
      setLoggedInUser(user);
    } else {
      alert("Invalid username or password!");
    }
  };

  // Log out a user
  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      {loggedInUser ? (
        <Dashboard user={loggedInUser} logout={logout} />
      ) : showCreateAccount ? (
        <CreateAccount
          createAccount={createAccount}
          setShowCreateAccount={setShowCreateAccount}
        />
      ) : (
        <Login login={login} setShowCreateAccount={setShowCreateAccount} />
      )}
    </div>
  );
};

export default App;
