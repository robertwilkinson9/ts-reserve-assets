{ /*
import React, { useState } from "react";
*/ }

import { Header } from './components/header'
//import { Login } from './components/login'
import { Login } from './components/combined'
import { Calendar } from './components/calendar'
import { Desks } from './components/desks'

export const App = () => {
   return (
     <>
     <Header />
     <h4> Login </h4>
     <Login />
     <h4> Calendar </h4>
     <Calendar />
     <Desks />
     </>
   );
}

{ /* 
import { BasicExample }  from './components/form'

export const App = () => {
   return (
     <>
     <BasicExample />
     </>
   );
}
*/ }

{ /*
import Login from './components/login'
import Login from './components/combined'

export const App = () => {
   return (
     <>
     <Login />
     </>
   );
}
*/ }

{ /*
export const App = () => {
   return (
     <>
     <h1>Hello world!</h1>
     </>
   );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

*/ }

export default App
