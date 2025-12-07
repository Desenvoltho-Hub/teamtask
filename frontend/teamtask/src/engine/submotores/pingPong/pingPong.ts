//=====================================================================
//! PING PONG EFFECT

//=====================================================================
//?Index

//=====================================================================
export const pingPong = (x: number) => {
  const velocidade = x
    if(velocidade) {
        let i = 0
        let up = false
        setInterval(() => {
            if(i === 0) {
                up = false
            } else if(!up) {
                i++
            } else if(i === 600) {
                up = true
            } else if(up) {
                i--
            }
            console.log(i)
        }, velocidade);
    }
    
}