import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <a href='#' className='logo'>Eli John</a>

        <nav className='navbar'>
            <a href='#' className='active'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Portfolio</a>
            <a href='#'>Contacts</a>
        </nav>
    </header>
  )
}
