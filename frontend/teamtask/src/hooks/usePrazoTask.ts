import { useState } from "react"
import { api } from "../api/api"

export const usePrazo = () => {
    const [prazo, setPrazo] = useState('')
    const buscarPrazo = async (data:string) => {
        const response = await api.get(`/task/prazo/${data}`)
        setPrazo(response.data.response)
    }
    return {
        prazo,
        buscarPrazo
    }
}