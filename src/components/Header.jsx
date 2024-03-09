import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <Link to='/' className='logo'>Eli John</Link>

        <nav className='navbar'>
            <Link to='/' className='active'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/#contacts'>Contacts</Link>
        </nav>
    </header>
  )
}
