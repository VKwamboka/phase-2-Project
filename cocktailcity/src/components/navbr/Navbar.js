import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='navbar navbar-expand-lg bg-light'>
    <Router>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='navbar-nav'>
                <Link className='nav-link' to='/search'>Search</Link>
            </li>

        </ul>
    </Router>
   </nav>
    
  )
}
