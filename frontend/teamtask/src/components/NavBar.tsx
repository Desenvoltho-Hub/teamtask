import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { getMe, state } = useContext(UserContext);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <nav className="bg-base-200 shadow-md px-5 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <img src="/logoteamtasker.png" alt="Logo" className="w-28" />

    
        <h1 className="text-4xl md:text-xl text-primary font-extrabold border-l-4 rounded-2xl p-5 shadow-lg">
          {state.user?.name?.toUpperCase() || "USUÁRIO"}
        </h1>

        
        <ul className="hidden md:flex gap-12 text-xl font-semibold text-base-content">
          <Link to='/user'>
          <li className="links cursor-pointer">Dashboard</li>
          </Link>
          
           
          <Link to='/equipes'>
          <li className="links cursor-pointer">Equipes</li>
          </Link>
          <Link to='/tasks'>
          <li className="links cursor-pointer">Tasks</li>
          </Link>
        </ul>

      
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

     
      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 bg-base-300 rounded-xl p-4 shadow-lg">
            <Link to='/user'>
          <li className="links cursor-pointer">Dashboard</li>
          </Link>
          
           
          <Link to='/equipes'>
          <li className="links cursor-pointer">Equipes</li>
          </Link>
          <Link to='/tasks'>
          <li className="links cursor-pointer">Tasks</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
