import { useState, type ChangeEvent } from "react"

export const useValidation = () => {
    const [title, setTitle] = useState<string>()
    const [alerta, setAlerta] = useState<string>()
    
    const [enable, setEnable] = useState(false)
    const validar = (e: string) => {
        setTitle(e)
            if(title!.length > 20) {
                setEnable(true)
                setAlerta('O título deve ter no máximo 20 letras')
            } 
            if(title!.length < 20)
                setEnable(false)
                setAlerta('')
          
            
           
        } 
        return {
            validar,
            alerta,
            enable,
            title,
            setTitle
        }
        }
    
        
    
   
    
