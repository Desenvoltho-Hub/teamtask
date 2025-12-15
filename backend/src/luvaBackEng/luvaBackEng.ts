import { calcularPrazo } from "./submotoresRN/calcularPrazo.js"
import { sanitizador } from "./submotoresRN/sanitizador.js"

export const luvaBackEng = (action: string, input: any) => {

    console.log(action, input)
    let valor: any
    const get = () => {
        return valor
    }
    const set = (novoValor: any) => {
        valor = novoValor
    }
    //! Listener
    const actionListener = get()
   
        
        
    
    //! Actions
    switch(actionListener){
        case "PRAZO":
        calcularPrazo(input, (resultado) => {
            set(resultado)
        })
        break
    }
    console.log(get())
    return {
        set
    }
}
