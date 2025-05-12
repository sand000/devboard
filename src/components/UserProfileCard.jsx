import React from "react";
import StatusUpdater from "./StatusUpdater";

function UserProfileCard({ user }) {
  return (
    <div>
      <h3>Name: {user?.name || "sandhya"}</h3>
      <h3>Email: {user?.email || "sandhya@gmail.com"}</h3>

      <h3>Company Name: {user?.company.name || "ACB"}</h3>
      <StatusUpdater />
    </div>
  );
}

export default UserProfileCard;
