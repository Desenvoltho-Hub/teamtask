import { luvaBackEng } from "../luvaBackEng.js";

export const calcularPrazo = (payload: string, cb:(v: string) => void) => {
  const luva = luvaBackEng('','')
  const MS_DIA = 1000 * 60 * 60 * 24;

  const normalizar = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

  const hoje = normalizar(new Date());
  const prazo = normalizar(new Date(payload));
  const diffDias = (prazo - hoje) / MS_DIA;
  if(diffDias < -1) {
    cb("Tarefa atrasada")
  }
  if(diffDias === -1) {
    cb("Vence hoje")
  }
  if(diffDias >= 0) {
    cb("Em dia")
  };
  
};
