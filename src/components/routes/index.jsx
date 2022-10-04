import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardState from '../pages/cardState'
import Home from '../pages/Home'

function AppRoute(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/state' element={<CardState/>}/>
      </Routes>
    </>
  )
}

export default AppRoute