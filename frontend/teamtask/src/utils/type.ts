import type { ChangeEvent, Dispatch } from "react"
//! User
export interface User {
    name: string
    email: string
    password: string
}
export interface UserState {
    user: User
}
export type UserAction = {
    type: "CADASTRO"
    user: User
} | {
    type: "INPUT"
    name: keyof User
    value: string
} 
export interface UserContextType {
    state: UserState
    dispatch: Dispatch<UserAction>
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    cadastrar: () => void
    getMe: () => void
    login: () => void
}
export const userInitialState: UserState = {
    user: {
        name: '',
        email: '',
        password: ''
    }
}



//! Equipe

export interface Equipe {
  _id: string
  name: string;
  description: string;
  members: [];
  creator: string;
}

export interface EquipeState {
  equipe: Equipe[];
  novaEquipe: Equipe;
}

export const equipeInitialState: EquipeState = {
  equipe: [],
  novaEquipe: {
    _id: '',
    name: '',
    description: '',
    members: [],
    creator: ''
  }
}

export interface EquipeContextType {
  state: EquipeState;
  dispatch: Dispatch<EquipeAction>;
  criarEquipe: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  equipeGet: () => void;
  deletarEquipe: (id: string) => void
}
export type EquipeAction =
  | { type: "CRIAR_EQUIPE"; equipe: Equipe }       
  | { type: "SET_EQUIPES"; equipe: Equipe[] }    
  | { type: "INPUT"; name: keyof Equipe; value: string } 

  export interface Card {
  equipeId: string
  name: string
  description: string
  members: number
}
//! Task

export interface Task {
  _id: string,
  title: string,
  description: string,
  status: string,

  dataDeEntrega: string
  isCompleted: boolean
  
  equipe: string
}
export interface TaskState {
  task: Task[]
  novaTask: Task
  userId: TaskDesign
}
export const taskInitialState: TaskState = {
  task: [],
    novaTask: {
      _id: '',
    title: '',
    description: '',

    isCompleted: false,
    equipe: '',
    dataDeEntrega: '',
    status: ''

  },
 
}
export type TaskAction = {
  type: 'TASK',
  task: Task[],
  

} | {
  type: 'INPUT',
  name: string,
  value: string
} | { 
  type: 'DESIGNAR_TASK'
  userId: TaskDesign

}
export interface TaskContextType {
  state: TaskState
  dispatch: Dispatch<TaskAction>
  criarNovaTask: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  designarTask: () => void
  getTask: () => void
}
export interface TaskDesign {
  userId: string
  equipeId: string
}