//=====================================================================
//! Groovera Core Engine  ⚙️
//=====================================================================
export const motor = <T>(x: T) => {
  let valor = x
  const listeners: ((v: T) => void)[] = []
  function get() {
    return valor
  }
  function set(novoValor: T) {
    valor = novoValor

    listeners.forEach(v => v(valor))
    
  }
  const subscribe = (fn:(v: T ) => void) => {
    listeners.push(fn)
    return () => {
      const index = listeners.indexOf(fn)
      if(index > -1) listeners.splice(index, 1)
    }
  }
    
  return {
    get,
    set,
    subscribe
  }
  }

  
