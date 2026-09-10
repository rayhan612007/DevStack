import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Herosection from './component/Herosection'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar/>
      <Herosection/>
      <Footer/>
    </div>
  )
}

export default App
