import { useState } from 'react'
import React from 'react'
import './App.css'
import Hero from '../Landing page/Hero'
import Header from '../Landing page/Navbar'
import ProductList from '../Landing page/Products'
import CategoryList from '../Landing page/Categories'
import ServiceSection from '../Landing page/Servicesection'
import Footer from '../Landing page/Footer'
function App() {

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <CategoryList />
    <ProductList title="Makeup and Skincare" limit={4} />
<ProductList title="Trending Tech" categoryName="smartphones" limit={4} />
<ProductList title="Summer Fashion" categoryName="tops" limit={4} />
<ServiceSection/>
<Footer/>
    </>
  )
}

export default App
