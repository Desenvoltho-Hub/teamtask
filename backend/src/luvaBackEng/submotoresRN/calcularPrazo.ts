
import type { TaskType } from "../../utils/type.js";
import type { Task } from "../../models/taskSchema.js";

export const calcularPrazo = (payload ) => {
    const hoje = new Date() 
    const normalizar = {
        dia: hoje.getDate(),
        mes: hoje.getMonth(),
        ano: hoje.getFullYear()
    }
    const prazo = new Date() 

}