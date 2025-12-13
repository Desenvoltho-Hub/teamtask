import { createContext } from "react";
import  { type EquipeContextType, equipeInitialState } from "../utils/type";

export const EquipeContext = createContext<EquipeContextType>({
    state: equipeInitialState,
    dispatch: () => {},
    criarEquipe: () => {},
    handleChange: () => {},
    equipeGet: () => {},
    deletarEquipe: () => {}
})