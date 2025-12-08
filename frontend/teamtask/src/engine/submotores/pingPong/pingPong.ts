//=====================================================================
//! PING PONG EFFECT

//=====================================================================
export const pingPong = (x: number) => {


  //! Listeners

  const listenerVelocidade: ((v: number) => void)[] = [];

  //=====================================================================
  //! Getter e Setter
  let velocidade = x
  const getVelocidadePingPong = () => {
    return velocidade
  }
  const setVelocidadePingPong = (novoValorVelocidadePingPong: number) => {
  velocidade = novoValorVelocidadePingPong
  listenerVelocidade.forEach(v => v(velocidade))
  }

  //! Engrenagens
  const url = window.location.pathname;
  if (velocidade) {
    let i = 0;
    let up = true;
    const id = setInterval(() => {
      if (i === 0) {
        up = true;
      }
      if (i === 600) {
        up = false;
      }
      if (up === true) {
        i++;
      } else {
        i--;
      }

      console.log(i);
      if (window.location.pathname !== url) {
        clearInterval(id);
      }
    }, velocidade);
  }
  //=====================================================================
  //! Subscribes

  const subscribeVelocidade = (fn: (v: number) => void) => {
    listenerVelocidade.push(fn);
    return () => {
      const index = listenerVelocidade.indexOf(fn);
      if (index > -1) {
        listenerVelocidade.splice(index, 1);
      }
    };
  };

  //=====================================================================
  return {
    getVelocidadePingPong,
    setVelocidadePingPong,
    subscribeVelocidade,
  };
};
