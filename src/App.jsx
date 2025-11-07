import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import UserDetailsModal from "./components/UserDetailsModal";
import "./App.css";
<h1 className="text-3xl font-bold text-blue-600 text-center mt-4">
  User Directory
</h1>

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="user-list">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onViewDetails={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default App;
