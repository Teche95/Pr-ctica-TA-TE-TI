import React, { useState } from 'react'

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

    // const celdas = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]

    // este estado sirve para crear un array de 9 posiciones con valores null 
    // tambien voy a ir guardando los valores que el usuario vaya eligiendo para mostrarlo en la pantalla

    const [tablero, setTablero] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState(TURNOS.X)
    // console.log(turno)

    const actualizarTablero = (index) => {
        // tengo que hacer que el turno ya sea x u o se guarde en el index que selecciono
        tablero[index] = turno

        // console.log(tablero)
    }

    // console.log(board)

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

            {/* <button onClick={prueba}>hola</button> */}

        </main >

    )
}

export default Tateti