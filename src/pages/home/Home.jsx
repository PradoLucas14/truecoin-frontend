import React from 'react'
import Hero from '../../components/homeComponents/hero/hero/Hero'
import Register from '../register/Register'
import Categories from '../../components/homeComponents/hero/categories/categories'

function Home() {
  return (
    <div>
      <Hero/>
      <Categories></Categories>
    </div>
  )
}

export default Home
