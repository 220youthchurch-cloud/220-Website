import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <main>
      <Outlet />
      </main>
      {/* <Footer />*/}
    </div>
  )
}

export default App
