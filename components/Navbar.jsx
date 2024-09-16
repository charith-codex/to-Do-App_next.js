import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around  text-slate-600 bg-slate-200/50'>
      <h1 className='text-lg font-semibold'>Todo App</h1>
      <ul className='flex gap-[40px] text-base'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
