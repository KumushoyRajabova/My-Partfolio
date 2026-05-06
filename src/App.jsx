import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Form} from 'react-router-dom'
import AboutMe from './aboutme'
import Loyiha from './loyiha'
import Home from './home'
import Books from './Books'
import CountryList from './Davlatlar'
import CurrencyConverter from './Canvertor'


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
        <Link id="link" to="/books">Kitoblarim</Link>
        <Link id='link' to="/loyiha">Loyihalarim</Link>
        <Link id='link' to="/countrylist">Davlatlar</Link>
        <Link id='link' to="/convertor">Konvertor</Link>
      </nav>

      <div style={{padding:"20px"}}>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path="/loyiha" element={<Loyiha/>}/>
          <Route path="/countrylist" element={<CountryList />}/>
          <Route path="/convertor" element={<CurrencyConverter />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
