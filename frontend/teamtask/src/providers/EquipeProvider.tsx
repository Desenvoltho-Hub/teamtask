import { useReducer, type ChangeEvent, type PropsWithChildren } from "react";
import { EquipeContext } from "../contexts/EquipeContext";
import { equipeInitialState, type Equipe, type EquipeAction, type EquipeState } from "../utils/type";
import { api } from "../api/api";

export const EquipeProvider = ({ children }: PropsWithChildren) => {
  const reducer = (state: EquipeState, action: EquipeAction): EquipeState => {
    switch (action.type) {
      case "CRIAR_EQUIPE":
        return {
          ...state,
          equipe: [...state.equipe, action.equipe],
          novaEquipe: { _id: '', name: '', description: '', members: [], creator: '' }         };
      case "SET_EQUIPES":
        return { ...state, equipe: action.equipe }; 
      case "INPUT":
        return {
          ...state,
          novaEquipe: {
            ...state.novaEquipe,
            [action.name]: action.value
          }
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, equipeInitialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "INPUT",
      name: e.target.name as keyof Equipe,
      value: e.target.value
    });
  };
//! Criar Equipe
  const criarEquipe = async () => {
    try {
      const response = await api.post("equipe/criar", {
        name: state.novaEquipe.name,
        description: state.novaEquipe.description
      });
      dispatch({
        type: "CRIAR_EQUIPE",
        equipe: response.data
      });
      alert("Equipe criada com sucesso!");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar equipe");
    }
  };
//! EquipeGEt
  const equipeGet = async () => {
    try {
      const response = await api.get("/equipe/equipes");
      dispatch({
        type: "SET_EQUIPES",
        equipe: response.data.response
      });
    } catch (err) {
      console.log(err);
    }
  };
//! Equipe delete
  const deletarEquipe = async(id: string) => {
    try {
      console.log(id)
      await api.delete(`/equipe/delete/${id}`)
      alert('Equipe deletada com sucesso!')
    } catch(err) {
      alert('Erro ao deletar equipe')
      console.log(err)
    }
  }




  return (
    <EquipeContext.Provider value={{ state, dispatch, criarEquipe, handleChange, equipeGet, deletarEquipe }}>
      {children}
    </EquipeContext.Provider>
  );
};
