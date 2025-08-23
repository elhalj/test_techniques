import React, { useState } from 'react'

const Test4 = () => {
    const [data, setData] = useState("afficher/cacher")

    const afficher = () => {
        if (data.trim() !== "") setData(data)
    }
    const cacher = () => {
        if (data.trim() !== "") {
            setData("");
        }
    }
    return (
        <div>
            <p>{data}</p>
            <button onClick={afficher}>Afficher</button>
            <button onClick={cacher}>Cacher</button>
        </div>
    )
}

export default Test4

// Version encore plus clean(un seul bouton toggle)
// import React, { useState } from 'react'

// const Test4 = () => {
//     const [show, setShow] = useState(false)

//     return (
//         <div>
//             <button onClick={() => setShow(prev => !prev)}>
//                 {show ? "Cacher" : "Afficher"}
//             </button>

//             {show && <p>🌟 Ceci est mon texte magique 🌟</p>}
//         </div>
//     )
// }

// export default Test4
