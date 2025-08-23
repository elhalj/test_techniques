// import React, { useState } from 'react'


// const Test3 = () => {
//     const [count, setCount] = useState(0)

//     const increment = () => {
//         setCount(prev => prev + 1)
//     }

//     const decrement = () => {
//         setCount(prev => prev - 1)
//     }

//     const reset = () => {
//         setCount(0)
//     }
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default Test3

//Version avec useReduccer

import React, { useReducer } from 'react'

// Reducer = la logique centralisée
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state
    }
}

const Test3Reducer = () => {
    // useReducer prend le reducer et l'état initial
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}

export default Test3Reducer
