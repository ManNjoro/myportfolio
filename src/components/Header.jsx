import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <Link to='/' className='logo'>Eli John</Link>

        <nav className='navbar'>
            <NavLink className={({isActive})=> isActive ? "active" : null} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "active" : null} to='/projects'>Projects</NavLink>
            <Link to='/#contacts'>Contacts</Link>
        </nav>
    </header>
  )
}
