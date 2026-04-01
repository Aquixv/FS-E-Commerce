import { useState } from 'react'
import React from 'react'
import './App.css'
import Hero from '../Landing page/Hero'
import Header from '../Landing page/Navbar'
import ProductList from '../Landing page/Products'

function App() {

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <ProductList></ProductList>
    </>
  )
}

export default App
