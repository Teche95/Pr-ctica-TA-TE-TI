import { useState } from 'react'

// TODO: 
// 1- necesito saber de quien es el turno
// 2- necesito saber que turnos hay |OK|
// 3- necesito mostrar una grilla de 9 espacios |OK|
// 4- necesito un array de 9 posiciones |OK|
// 5- capturar lo que el usuario eligió
// 6- guardar y mostrar lo que el usuario eligió 


const Tateti = () => {

    // turnos que voy a utilizar 
    const TURNOS = {
        X: "x",
        O: "o"
    }

    // const celdas = ["x", "o", "", "", "", "", "", "", ""]

    // este estado sirve para crear un array de 9 posiciones con valores null 
    // tambien voy a ir guardando los valores que el usuario vaya eligiendo para mostrarlo en la pantalla

    const [tablero, setTablero] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState(TURNOS.X)
    const [ganador, setGanador] = useState(null)
    // console.log("tablero", tablero)

    const chequearGanador = (checkwin) => {
        for (let i = 0; i < 3; i++) {

            // verificacion de filas
            let ceroAlTres = checkwin.slice(0, 3)
            let tresAlSeis = checkwin.slice(3, 6)
            let seisAlOcho = checkwin.slice(6)
            if (ceroAlTres.every(el => el === turno) || tresAlSeis.every(el => el === turno) || seisAlOcho.every(el => el === turno)) {
                console.log("gano", turno)
                return ceroAlTres[0]
            }

            // verificacion de filas
            // if (checkwin[i * 3] && checkwin[i * 3] === checkwin[i * 3 + 1] && checkwin[i * 3] === checkwin[i * 3 + 2]) {
            //     console.log("gano", turno)
            //     return checkwin[i * 3];
            // }

            // verificacion de columnas 
            if (checkwin[i] && checkwin[i] === checkwin[i + 3] && checkwin[i] === checkwin[i + 6]) {
                console.log("gano", turno)
                return checkwin[i]
            }

            // verificacion de diagonales
            if (checkwin[0] && checkwin[0] === checkwin[4] && checkwin[0] === checkwin[8]) {
                console.log("ganó", turno)
                return checkwin[0]
            }
            if (checkwin[2] && checkwin[2] === checkwin[4] && checkwin[2] === checkwin[6]) {
                console.log("ganó", turno)
                return checkwin[2]
            }
        }
        return null
    }

    const actualizarTablero = (index) => {
        // ver si la casilla esta en null o no para saber si tengo que guardar ahí o no 
        if (!tablero[index] && !ganador) {
            const nuevoTablero = [...tablero]
            // tengo que hacer que el turno ya sea x u o se guarde en el index que selecciono
            nuevoTablero[index] = turno
            setTablero(nuevoTablero)
            setTurno(turno === TURNOS.X ? TURNOS.O : TURNOS.X)
            console.log(index)
            const nuevoGanador = chequearGanador(nuevoTablero)
            if (nuevoGanador) {
                setGanador(nuevoGanador)
            }
        }
    }

    // tengo que hacer una funcion que verifique si hay ganador, pero todavia no sé donde colocarla


    return (
        <main className='board'>
            <h1>TA TE TI</h1>

            <section className='game'>
                {
                    tablero?.map((_, index) => (
                        <div key={index} className='square' onClick={() => actualizarTablero(index)}>
                            {tablero[index]}
                        </div>
                    ))
                }
            </section>




        </main >

    )
}

export default Tateti