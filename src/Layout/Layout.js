import React from 'react'
import Header from '../Components/Header/Header'
import Routers from '../Routers/Routers'
import './Layout.css'
import Footer from '../Components/Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <div className='layout'>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
