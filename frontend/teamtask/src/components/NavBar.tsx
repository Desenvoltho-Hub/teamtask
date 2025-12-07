import { useEffect, useRef, useState } from "react";
import { motor } from "../engine/GrooveraCoreEngine";
import { subscribe } from "diagnostics_channel";

function NavBar() {
  const [incremento, setIncremento] = useState<string | number | boolean>();
  const motorUse = useRef(motor('')).current
useEffect(() => {
const unsubscribe = motorUse.subscribe(v => setIncremento(v))
return () => {
  unsubscribe()
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
