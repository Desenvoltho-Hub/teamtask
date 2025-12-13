import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LadingPage";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Equipes from "./pages/Equipes";
import Footer from "./components/Footer";
import Tasks from "./pages/Tasks";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/user" element={
        <>
        <NavBar />
        <Dashboard />
        <Footer/>
        </>
      }>
        
      
      </Route>
      <Route path='/equipes' element={
        <>
        <NavBar/>
        <Equipes/>
        <Footer/>
        </>
        }
        
        >
        </Route>
        <Route path="/tasks" element={
          <>
          <NavBar/>
          <Tasks/>
          <Footer />
          </>
          
          } />
    </Routes>
   );
}

export default App;