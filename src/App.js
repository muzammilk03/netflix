import { Route, Routes } from "react-router-dom";
import Nevbar from "./components/Nevbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/Login";

import Account from "./Pages/Account";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

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
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
