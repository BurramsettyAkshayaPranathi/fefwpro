import React, { useState } from "react";

const demoUsers = {
  "admin@careconnect.com": { name: "Admin User", type: "admin", password: "admin123" },
  "donor@example.com": { name: "John Donor", type: "donor", password: "donor123" },
  "recipient@example.com": { name: "Jane Recipient", type: "recipient", password: "recipient123" },
  "logistics@example.com": { name: "Mike Logistics", type: "logistics", password: "logistics123" },
};

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = demoUsers[email.toLowerCase()];
    if (!user) return alert("Account not found.");
    if (user.password !== password) return alert("Incorrect password.");
    if (user.type !== userType) return alert(`Account is registered as ${user.type}.`);
    onLogin({ ...user, email });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="donor">Donor</option>
            <option value="recipient">Recipient</option>
            <option value="logistics">Logistics</option>
          </select>
          <div className="flex justify-end space-x-2 mt-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
