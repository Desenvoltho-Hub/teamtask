import { pingPong } from "./submotores/pingPong/pingPong";
//=====================================================================
//! LUVA ENGINE  ⚙️
//=====================================================================
export const luva = (efeito: string, x : number) => {
  const pingPongMotor = pingPong(0)
  const parametroUm = x
  //===================================================================
  //! Listener
  
  const listener: ((v: number | string) => void)[] = [];
  
  //? PingPong
  const listenerPingPongVelocidade: ((v: number) => void)[] = []
  
  //===================================================================
  //? Getters e Setters
  let valor = efeito;
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
        pingPongMotor.setVelocidadePingPong(parametroUm)
        break
        default:
          break;
        }
      };
      //? PingPong
      
      let valorVelocidadePingPong = 0
  pingPongMotor.subscribeVelocidade(v => {valorVelocidadePingPong = v})
  const getVelocidadePingPong = () => {
    return valorVelocidadePingPong
  }
  const setVelocidadePingPong = (novoValorVelocidadePingPong: number) => {
    valorVelocidadePingPong = novoValorVelocidadePingPong
    listenerPingPongVelocidade.forEach(v => v(valorVelocidadePingPong))
  }
  //==================================================================
  //! Subscribes

  const subscribe = (fn: (v: number | string) => void) => {
    listener.push(fn);
    return () => {
      const index = listener.indexOf(fn);
      if (index > -1) {
        listener.splice(index, 1);
      }
    };
    
    }
    //?Ping-Pong
    const subscribeValorVeloidadePingPong = (fn:(v: number) => void) => {
      listenerPingPongVelocidade.push(fn)
      return () => {
        const index = listenerPingPongVelocidade.indexOf(fn)
        if(index > -1){
          listenerPingPongVelocidade.splice(index, 1)
        }
      }
    }
  //====================================================================
  return {
    get,
    getVelocidadePingPong,
    setVelocidadePingPong,
    set,
    subscribe,
    subscribeValorVeloidadePingPong
    
  };
};
