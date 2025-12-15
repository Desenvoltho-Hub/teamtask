import { createContext } from "react";
import { userInitialState, type UserContextType } from "../utils/type";
;

export const UserContext = createContext<UserContextType>({
    state: userInitialState,
    dispatch: () => {},
    handleChange: () => {},
    cadastrar: () => {},
    getMe: () => {},
    login: () => {}
})