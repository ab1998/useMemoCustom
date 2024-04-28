import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const square = () => {
    console.log("EXpensive") //getting fired because whole component is getting fired as count1 state is changing and component is getting rerender
    return count * count
  }
  const newsquare = useMemo(square,[count])
  return (
    <>
      <h2>Count:{count}</h2>
      <h2>Square Count:{newsquare}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <h2>Count:{count1}</h2>
      <button onClick={() => setCount1((prev) => prev - 1)}>Increment</button>
    </>
  )
}

export default App
