import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import About from "./components/About";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
