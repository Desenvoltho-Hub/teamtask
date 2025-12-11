import type { ChangeEvent, Dispatch } from "react"

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
    name: string
    value: string
}
export interface UserContextType {
    state: UserState
    dispatch: Dispatch<UserAction>
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    cadastrar: () => void
}
export const userInitialState: UserState = {
    user: {
        name: '',
        email: '',
        password: ''
    }
}