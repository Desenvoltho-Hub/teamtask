import { useEffect, useRef, useState } from "react";
import { luva, motor } from "../engine/LuvaEng";
import { subscribe } from "diagnostics_channel";

function NavBar() {
  const [incremento, setIncremento] = useState<string | number | boolean>();
  
useEffect(() => {

return () => {
  luva('pingPong', 100)
}

}, [])

  return (
    <div className="bg-secondary flex justify-between p-2 items-center">
      <img src="/logoteamtasker.png" alt="logo" className="w-28 md:ml-20" />
      <div>
        <input
          type="text"
          onChange={(e) => motorUse.set(e.target.value)}
          placeholder="Digite algo"
        />
        <div>{incremento}</div>
      </div>
    </div>
  );
}

export default NavBar;
