import { Route, Routes } from "react-router-dom";
import Nevbar from "./components/Nevbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Nevbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
