import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AboutMe from './aboutme'
import Loyiha from './loyiha'
import Home from './home'


// const Home = () => <h2>Home</h2>;
// const About = () => <h2>Biz haqimizda</h2>;
// const Contact = () => <h2>Aloqa bo'limi</h2>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link id='link' to="/home" style={{marginRight:"10px"}}>Bosh sahifa</Link>
        <Link id='link' to="/aboutme" style={{marginRight:"10px"}}>Men haqimda</Link>
        <Link id='link' to="/loyiha">Loyihalarim</Link>
      </nav>

      <div style={{padding:"20px"}}>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/loyiha" element={<Loyiha/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
