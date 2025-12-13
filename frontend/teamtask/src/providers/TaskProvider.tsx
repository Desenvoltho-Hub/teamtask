import { useReducer, type ChangeEvent, type PropsWithChildren } from "react";
import {
  taskInitialState,
  type TaskAction,
  type TaskState,
} from "../utils/type";
import { TaskContext } from "../contexts/TaskContext";
import { api } from "../api/api";

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const reducer = (state: TaskState, action: TaskAction) => {
    switch (action.type) {
      case "TASK": {
        return {
          ...state,
          task: [...state.task, ...action.task],
          novaTask: {
            title: "",
            description: "",
            dataDeEntrega: "",
            isCompleted: false,
            equipe: "",
            status: "",
          },
        };
      }
      case "INPUT":
        return {
          ...state,
          novaTask: {
            ...state.novaTask,
            [action.name]: action.value
          }
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, taskInitialState);
  const criarNovaTask = async () => {
    try {
      const response = await api.post("/task/addtask", {
        title: state.novaTask.title,
        description: state.novaTask.description,
        equipe: state.novaTask.equipe,
        isCompleted: state.novaTask.isCompleted,
        status: state.novaTask.status,
        dataDeEntrega: state.novaTask.dataDeEntrega,
      });
      dispatch({
        type: "TASK",
        task: response.data.response,
      });
      alert("Nova task criada com sucesso!");
    } catch (err) {
        console.log(state.novaTask)
      console.log(err);
      alert("Erro ao criar nova task!");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "INPUT",
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <TaskContext.Provider
      value={{ state, dispatch, criarNovaTask, handleChange }}
    >
      {children}
    </TaskContext.Provider>
  );
};
