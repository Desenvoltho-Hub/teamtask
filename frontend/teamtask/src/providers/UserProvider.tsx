import { useReducer, type ChangeEvent, type PropsWithChildren } from "react";
import {
  userInitialState,
  type User,
  type UserAction,
  type UserState,
} from "../utils/type";
import { UserContext } from "../contexts/UserContext";
import { api } from "../api/api";


export const UseProvider = ({ children }: PropsWithChildren) => {
  const reducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
      case "CADASTRO":
        return {
          ...state,
          user: action.user,
        };
      case "INPUT":
        return {
          ...state,
          user: {
            ...state.user,
            [action.name]: action.value
          }
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, userInitialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
        type: "INPUT",
        name: e.target.name as keyof User,
        value: e.target.value
    })
  }
  const cadastrar = async () => {
    
    try {
        const response = await api.post('/user/register', {
        name: state.user.name,
        email: state.user.email,
        password: state.user.password
    })
    dispatch({
        type: 'CADASTRO',
        user: response.data
    })
    alert('Cadastro efetuado com sucesso')
  } catch(err) {
    alert('erro ao se cadastrar')
    console.log(err)
  }
}
  return (
    <UserContext.Provider value={{ state, dispatch, handleChange, cadastrar }}>
      {children}
    </UserContext.Provider>
  );
};
