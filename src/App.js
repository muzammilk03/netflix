import { Route, Routes } from "react-router-dom";
import Nevbar from "./components/Nevbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/Login";

import Account from "./Pages/Account";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Fmovies from "./Pages/Fmovies";
import Sports from "./Pages/Sports";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/fmovies" element={<Fmovies />} />
          <Route path="/sports" element={<Sports/>}/>     
          </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
