import { calcularPrazo } from "./submotoresRN/calcularPrazo.js"

export const luvaBackEng = (action: string, input: any) => {
    //! Listener
    const listener = {
        action,
        input
    }
    switch(action){
        case "PRAZO":
        calcularPrazo(listener.input)
        break
    }

}
