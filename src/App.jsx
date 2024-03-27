import { useState } from 'react'
import './App.css'
import Tateti from './Tateti'


const TURNS = {
  X: "x",
  O: "o"
}



// const Square = ({ children, updateBoard, index }) => {
//   return (
//     <div className='square'>
//       {children}
//     </div>
//   )
// }



function App() {

  // // inicializo un array de 9 posiciones y le asigno a todos null
  // const [board, setBoard] = useState(Array(9).fill(null))
  // const [turn, setTurn] = useState(TURNS.X)

  return (
    <Tateti/>
    // <main className='board'>
    //   <h1>TA TE TI</h1>

    //   <section className='game'>
    //     {
    //       board.map((_, index) => {
    //         return (
    //           <Square
    //             key={index}
    //             index={index}
    //           >
    //             {board[index]}
    //           </Square >
    //         )
    //       })
    //     }
    //   </section>

    //   <section className='turn'>
    //     <Square>{TURNS.X}</Square>
    //     <Square>{TURNS.O}</Square>
    //   </section>

    // </main>
    
  )
}

export default App
