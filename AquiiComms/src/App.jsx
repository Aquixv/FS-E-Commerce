import { useState } from 'react'
import React from 'react'
import './App.css'
import Hero from '../Landing page/Hero'
import Header from '../Landing page/Navbar'
import ProductList from '../Landing page/Products'
import CategoryList from '../Landing page/Categories'
function App() {

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <CategoryList />
    <ProductList category="smartphones" title="Best Deals in Tech" />
<ProductList category="mens-shoes" title="Fashion Forward" />
    </>
  )
}

export default App
