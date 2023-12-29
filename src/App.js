import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import VerifyEmail from "./Pages/VerifyEmail";
import Browse from "./Pages/Browse";
import OpenRoute from "./components/Common/OpenRoute";
import PrivateRoute from "./components/Common/PrivateRoute";
import GPTSearch from "./Pages/GPTSearch";

function App() {
  return (
    <div className="p-0 m-0 w-screen min-h-screen overflow-x-hidden overflow-y-auto" >
      <Routes>

        {/* login */}
        <Route path="/" 
            element={  
              <OpenRoute>
                <Login/>
              </OpenRoute>
            } 
        />

        {/* SignUp */}
        <Route path="/signup" 
            element={
              <OpenRoute>
                <SignUp/>
              </OpenRoute>
            } 
        />

        {/* verify email */}
        <Route path="/verify-email" 
            element={
              <OpenRoute>
                <VerifyEmail/>
              </OpenRoute>
            } 
        />

        {/* browse page */}
        <Route path="/browse" 
            element={
              <PrivateRoute>
                <Browse/>
              </PrivateRoute>
            } 
        />

        {/* GPT Search Page */}
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <GPTSearch/>
            </PrivateRoute>
          }
        />

        {/* movie info */}
        <Route
          path="/movieinfo/:id"
        />

      </Routes>
    </div>
  );
}

export default App;
