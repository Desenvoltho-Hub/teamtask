//=====================================================================
//! LUVA ENGINE  ⚙️

import { pingPong } from "./submotores/pingPong/pingPong";

//=====================================================================
//?Index

//=====================================================================
export const motor = (efeito: string, x : number) => {
  let valor = efeito;
  const parametroUm = x
  //===================================================================
  //? Listener

  const listener: ((v: number | string) => void)[] = [];
  //===================================================================
  const get = () => {
    return valor;
  };
  const set = (novoValor: string) => {
    valor = novoValor;
    listener.forEach((v) => v(valor));


    //==================================================================
    //?Porteiro
    switch (valor) {
      case `pingPong`:
      pingPong(parametroUm)
       
      break
      default:
        break;
    }
  };
  //==================================================================
  //?Subscribes

  const subscribe = (fn: (v: number | string) => void) => {
    listener.push(fn);
    return () => {
      const index = listener.indexOf(fn);
      if (index > -1) {
        listener.splice(index, 1);
      }
    };
    //====================================================================
  };
  return {
    get,
    set,
    subscribe,
  };
};
