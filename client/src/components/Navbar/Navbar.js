import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/addInterview">Add Interview</Link>
      <Link to="/">Add Questions</Link>
    </div>
  )
}

export default Navbar
