import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Watched from "./pages/Watched"
import NavBar from "./components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main className="main">
        <Routes>
          {/* The Home component will be rendered when the path is (url ends with) / */}
          {/* The Watched component will be rendered when the path is /watched */}
          <Route path="/" element={<Home />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </main>
    </>
  )
}

export default App
