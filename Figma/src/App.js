import React from 'react'
import Blue from './Blue/Blue'
import Category from './Category/Category'
import Features from './Features/Features'
import Image from './Image/Image'
import Navbar from './Navbar/Navbar'
import Navbar1 from './Navbar1/Navbar1'
import Product from './Product/Product'
import Rectangle1 from './Rectangle1/Rectangle1'
import Search from './Search/Search'
import Shipping from './Shipping/Shipping'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Navbar1/>
      <Image/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Category/>
      <Rectangle1/>
      <Shipping/>
      <Features/>
      <Product/>
      <Search/>
      <Blue/>
    </div>
  )
}

export default App