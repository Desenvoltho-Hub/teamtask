import { useState } from "react"
import { api } from "../api/api"
import type { Funcao } from "../utils/type"

export const useFuncao = () => {
    const [funcaoGet, setFuncaoGet] = useState<Funcao[] | null>(null)
    const buscarFuncao = async (id: string) => {
        try {
            const response = await api.get(`/funcao/funcao/${id}`)
            setFuncaoGet(response.data.response as Funcao[])
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    return{ 
        funcaoGet,
        buscarFuncao
    }
 }