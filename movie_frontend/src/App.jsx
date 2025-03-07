import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
