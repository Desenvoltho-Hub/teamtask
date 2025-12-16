import { useState } from "react"
import { api } from "../api/api"

export const useEquipeTask = () => {
    const [equipe, setEquipe ] = useState()
    const buscarEquipe = async (eqp: string) => {
        const response = await api.get(`/task/equipe/${eqp}`)
        setEquipe(response.data.response)
        console.log(response.data)
    }
    return {
        equipe,
        buscarEquipe
    }
}