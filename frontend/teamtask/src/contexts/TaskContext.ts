import { createContext } from "react";
import { type TaskContextType, taskInitialState } from "../utils/type";

export const TaskContext = createContext<TaskContextType>({
    state: taskInitialState,
    dispatch: () => {},
    criarNovaTask: () => {},
    handleChange: () => {},
    designarTask: () => {},
    getTask: () => {}
})