import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import VerifyEmail from "./Pages/VerifyEmail";

function App() {
  return (
    <div className="p-0 m-0 w-screen min-h-screen overflow-x-hidden overflow-y-auto" >
      <Routes>

        {/* login */}
        <Route path="/" element={<Login/>} />

        {/* SignUp */}
        <Route path="/signup" element={<SignUp/>} />

        {/* verify email */}
        <Route path="/verify-email" element={<VerifyEmail/>} />

      </Routes>
    </div>
  );
}

export default App;
