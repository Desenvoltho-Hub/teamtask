import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { getMe, state } = useContext(UserContext);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <nav className="bg-base-200 shadow-md px-5 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <img src="/logoteamtasker.png" alt="Logo" className="w-28" />

        {/* Nome do usuário */}
        <h1 className="text-4xl md:text-5xl text-primary font-extrabold border-l-4 border-primary pl-5 py-2 bg-base-100 rounded-r-xl shadow-lg">
          {state.user?.name?.toUpperCase() || "USUÁRIO"}
        </h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-12 text-xl font-semibold text-base-content">
          <li className="links cursor-pointer">Dashboard</li>
          <li className="links cursor-pointer">Equipes</li>
          <li className="links cursor-pointer">Tasks</li>
        </ul>

        {/* Botão mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 bg-base-300 rounded-xl p-4 shadow-lg">
          <li className="links cursor-pointer">Dashboard</li>
          <li className="links cursor-pointer">Equipes</li>
          <li className="links cursor-pointer">Tasks</li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
