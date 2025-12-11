import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LadingPage";
import NavBar from "./components/NavBar";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/user" element={
        <>
        <NavBar />
        
        </>
      }>
      
      </Route>
    </Routes>
   );
}

export default App;