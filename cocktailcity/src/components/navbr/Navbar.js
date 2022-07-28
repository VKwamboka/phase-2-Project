import React from 'react'
import {Link} from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='navbar navbar-expand-lg bg-light'>
    {/* <Router> */}
    <div className='container-fluid'>
    <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='navbar-nav'>
                <Link className='nav-link' to='/search'>Search</Link>
            </li>
            <li className='navbar-nav'>
                <Link className='nav-link' to='/displayrecipe'>MyRecipes</Link>
            </li>
            <li className='navbar-nav'>
                <Link className='nav-link' to='/favourites'>Favorites♥</Link>
            </li>


        </ul>
    </div>
       
    {/* </Router> */}
   </nav>
    
  )
}
