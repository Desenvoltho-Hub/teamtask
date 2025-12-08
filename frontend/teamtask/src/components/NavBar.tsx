import { useState } from "react";

function NavBar() {
  const [set, setState] = useState()
  
  return (
    <div className="bg-secondary flex justify-between p-2 items-center">
      <img src="/logoteamtasker.png" alt="logo" className="w-28 md:ml-20" />
      <div>
        <input
          type="text"
          onChange={(e) => (e.target.value)}
          placeholder="Digite algo"
        />
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
