import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Carousel from './Components/Carosel'
import Cards from './Components/Cards'


function App() {
  

  return (
    <>
      <Navbar />
      <Carousel/>
      <Cards/>
      <Footer />
    </>
  )
}

export default App
