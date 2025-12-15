import { luvaBackEng } from "../luvaBackEng.js"

export const sanitizador = (action: string) => {
    const luva = luvaBackEng('','')
    const regex = /[^A-Za-z0-9 ]/
    if(regex.test(action)) {
        return
    }
    if(action.length > 50) {
        return
    }
    
  
    

}