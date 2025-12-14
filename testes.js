export const calcularPrazo = (payload) => {
  const MS_DIA = 1000 * 60 * 60 * 24;

  const normalizar = (d) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

  const hoje = normalizar(new Date());
  const prazo = normalizar(new Date(payload));

  const diffDias = (prazo - hoje) / MS_DIA;

  console.log(diffDias);
};
calcularPrazo("2025-12-19")