
// import { Route, Router, Routes } from 'react-router-dom'
// // import Exo1 from './exos/Exo1'
// // import Exo2 from './exos/Exo2'
// // import Exo3 from './exos/Exo3'
// import Exo4 from './exos/test_technique/Exo4'
// import TodoItem from './exos/test_technique/components/TodoItem'

// // Exo 1 — Form + validation(10–15 min)

// // Objectif: email + mot de passe contrôlés, bouton “Se connecter” disabled si invalid, message d’erreur serveur.

// //   Règles : email valide, mdp ≥ 6 caractères.

// // Au submit: await fakeLogin(email, pwd); en cas d’échec, afficher l’erreur.

// // États attendus: pristine / dirty, loading, error.
// const App = () => {

//   return (
//     <>
//       {/* <Exo1 />
//       <Exo2 />
//       <Exo3 /> */}
//       <Routes>
//         <Route path='/' element={<Exo4 />} />
//         <Route path='/todo/:id' element={<TodoItem />} />
//       </Routes>

//     </>
//   )
// }

// export default App
import React from 'react'
// import Main2 from './exos/jour2/Main2'
import Exo2 from './exos/test_technique/Exo2'
import Test3 from './exos/jour5/Test3'
import Test3Reducer from './exos/jour5/Test3'
import Test4 from './exos/jour5/Test4'
// import Main from './exos/jour1/Main'

const App = () => {
  return (
    <div>
      {/* <Exo1 /> */}
      {/* <Exo2 />   */}
      {/* <Test3Reducer /> */}
      <Test4 />
      {/* <Main /> */}
      {/* <Main2 /> */}
    </div>
  )
}

export default App

