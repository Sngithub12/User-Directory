import React from "react";

const UserCard = ({ user, onViewDetails }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Company:</strong> {user.company.name}</p>
    <button onClick={onViewDetails}>View Details</button>
  </div>
);

export default UserCard;
