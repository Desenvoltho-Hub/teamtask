import { useState, type ChangeEvent } from "react"
import { api } from "../api/api"

export const useAddMembro = () => {
    const [email, setEmail] = useState<string>()
    const handleChange = (e:string) => {
            setEmail(e)
        }
        const adicionarMembro = async (id: string) => {
            try {
                const response = api.put(`/equipe/addmembro/${id}`, {
                    email: email
                })
                alert('Membro adicionar com sucesso!')
                
                return response
            } catch(err) {
                console.log(err)
                alert('Não foi possível adicionar membro!')
            }
        }
        return {
            handleChange,
            adicionarMembro,
            email
        }
}