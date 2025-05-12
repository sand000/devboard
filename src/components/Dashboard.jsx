import React, { use } from "react";
import { useAuth } from "../context/AuthContext";
import StatusUpdater from "./StatusUpdater";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Login from "./login";
import UserProfileCard from "./UserProfileCard";

function Dashboard() {
  const { user, isLoading, isAuthenticated } = useAuth();
  console.log("loading", isLoading);

  return (
    <div style={{ width: "100%" }}>
      {isLoading && <h1>Loading....</h1>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {" "}
        <h1>Dashboard</h1>
        <ThemeToggle />
      </div>

      {user && isAuthenticated ? <UserProfileCard user={user} /> : ""}
    </div>
  );
}

export default Dashboard;
