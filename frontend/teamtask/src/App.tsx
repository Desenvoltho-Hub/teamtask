import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayOut from "./pages/AppLayOut";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (  
    <div >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={
        <>
        <NavBar/>
        <div className="flex">
        <SideBar/>
        <Dashboard/>

        </div>
        </>
        
      }/>
    </Routes>
    </div>
  );
}

export default App;