import { useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='bg-white min-h-screen selection:bg-[#97afbe]'>
      <Navbar />
      <main>
      <Outlet />
      <ScrollRestoration />
      </main>
      <Footer />
    </div>
  )
}

export default App
