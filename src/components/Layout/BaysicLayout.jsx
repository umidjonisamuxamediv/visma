import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
const BaysicLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default BaysicLayout
