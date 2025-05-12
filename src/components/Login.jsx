import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
    navigate("/dashboard");
  };

  console.log("log", user);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
