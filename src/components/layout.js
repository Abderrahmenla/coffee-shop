import React from "react"
import Navbar from './Globals/Navbar'
import Footer from './Globals/Footer'

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) =>(
  <>
 <Navbar />
 {children}
 <Footer />
 </>
)

export default Layout
