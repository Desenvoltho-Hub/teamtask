import { calcularPrazo } from "./submotoresRN/calcularPrazo.js"
import { sanitizador } from "./submotoresRN/sanitizador.js"

export const luvaBackEng = (action: string, input: any) => {

   
    let valor: any
    const get = () => {
        return valor
    }
    const set = (novoValor: any) => {
        valor = novoValor
    }
   
    //! Actions
    switch(action){
        case "PRAZO":
        calcularPrazo(input, (resultado) => {
            set(resultado)
        })
        break
        default:
            break
    }
    
    return {
        get
    }
}
