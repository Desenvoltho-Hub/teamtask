import { useState } from "react"
import { api } from "../api/api"

export const useFuncao = () => {
    const [funcaoGet, setFuncaoGet] = useState()
    const buscarFuncao = async (id) => {
        try {
            const response = await api.get(`/funcao/funcao/${id}`)
            setFuncaoGet(response.data.response)
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