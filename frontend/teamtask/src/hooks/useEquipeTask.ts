import { useState } from "react"
import { api } from "../api/api"

export const useEquipeTask = () => {
    const [equipe, setEquipe ] = useState()
    const buscarEquipe = async (eqp: string) => {
        const response = await api.get(`/task/equipe/${eqp}`)
        setEquipe(response.data.response)
        
    }
    const designarFuncao = async (id: string, user: string, title: string) => {
        try {const response = await  api.post(`/funcao/${id}/${user}`, {
            
            title: title
        })
        console.log(id, title, user )
        alert('Função adicionada com sucesso!')
        return response
    }catch (err) {
       console.log("AQUI", user)
        console.log(err)
    }
    }
    return {
        equipe,
        buscarEquipe,
        designarFuncao
    }
}