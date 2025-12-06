import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayOut from "./pages/AppLayOut";
import Home from "./pages/Home";

function App() {
  return (  
    <div >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route element={<AppLayOut/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;