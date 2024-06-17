import { useState } from 'react'
import './App.css'
import CardAdding from './components/CardAdding'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
import Signup from './components/Pages/SignUp';
import Sell from './components/Pages/Sell';
import ProductContent from './components/Pages/ProductContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CardAdding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/productdetails' element={<ProductContent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
