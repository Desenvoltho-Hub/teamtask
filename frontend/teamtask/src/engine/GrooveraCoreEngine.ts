//=====================================================================
//! Groovera Core Engine  ⚙️
//=====================================================================
export const motor = (x: string | number) => {
  let valor = x;
  function get() {
    return valor;
  }
  function set(novoValor: string | number) {
    valor = novoValor;
    listener.forEach((v) => v(valor));
  }

  const listener: ((v: number | string) => void)[] = [];

  const subscribe = (fn: (v: number | string) => void) => listener.push(fn);
  //===================================================================
  //!Engrenagens do motor...
  //===================================================================
  
  //===================================================================
  return {
    subscribe,
    get,
    set,
  };
};
