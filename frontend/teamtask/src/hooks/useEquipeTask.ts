import { useState } from "react"
import { api } from "../api/api"

export const useEquipeTask = () => {
    const [equipe, setEquipe ] = useState()
    const buscarEquipe = async (eqp: string) => {
        const response = await api.get(`/task/equipe/${eqp}`)
        setEquipe(response.data.response)
        
    }
    const designarFuncao = async (id: string, title: string, user: string) => {
        try {const response = await  api.put(`/task/designar/${id}`, {
            user: user,
            title: title
        })
        alert('Função adicionada com sucesso!')
        return response
    }catch (err) {
       
        console.log(err)
    }
    }
    return {
        equipe,
        buscarEquipe,
        designarFuncao
    }
}