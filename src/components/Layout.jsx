import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className='page-container'>
        <Header />
        <main className='main'>
            <Outlet />
        </main>
    </div>
  )
}