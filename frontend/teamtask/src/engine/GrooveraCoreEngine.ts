//!<intensidadeCor>
export const intensidadeCor = () => {
  let intensidade: number = 0;
  function get() {
    return intensidade;
  }
  function set(novoValor: number) {
    intensidade = novoValor;
  }
  const start = () => {
    const tick = () => {
      intensidade += 1;
    };
    setInterval(() => {
      if (intensidade < 600) {
        tick();
      }
    }, 1);
  };

  return {
    get,
    set,
    start,
  };
};

export const efeitoSmooth = (palavra: string) => {
  let arrayPalavra = palavra.split(""); // transforma em array de letras

  function get() {
    return arrayPalavra;
  }

  function set(novoValor: string[]) {
    arrayPalavra = novoValor;
  }

  const ativarEfeito = () => {
    arrayPalavra.forEach((letra, i) => {
      setTimeout(() => {
        const novoArray = [...arrayPalavra];
        novoArray[i] = letra.toUpperCase(); // transforma a letra
        set(novoArray);
        console.log(novoArray.join("")); // pra testar
      }, i * 100);
    });
  };

  return {
    get,
    set,
    ativarEfeito
  };
}
 

