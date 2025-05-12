import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return <div>{isAuthenticated ? children : <Navigate to='/login' replace />}</div>;
}

export default PrivateRoute;
