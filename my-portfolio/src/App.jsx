import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
