import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:text-left sm:justify-between shadow dark:shadow-stone-700 pt-3 px-6 sm:items-baseline w-full">
        <div className="mb-3 space-x-5 ">                
            <NavLink to="/" className="text-base no-underline text-stone-400 hover:text-stone-600">
                About
            </NavLink>
            <NavLink to="/Projects" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Projects
            </NavLink>
            <NavLink to="/Timeline" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Timeline
            </NavLink>
            <NavLink to="/Contact" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Contact
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar