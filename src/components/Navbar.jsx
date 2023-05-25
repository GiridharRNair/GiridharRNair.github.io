import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between shadow py-4 px-6 sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 space-x-5 ">                
            <NavLink to="/GiridharPortfolio" className="text-base no-underline text-stone-400 hover:text-stone-600">
                About
            </NavLink>
            <NavLink to="/GiridharPortfolio/Projects" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Projects
            </NavLink>
            <NavLink to="/GiridharPortfolio/Timeline" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Timeline
            </NavLink>
            <NavLink to="/GiridharPortfolio/Contact" className="text-base no-underline text-stone-400 hover:text-stone-600">
                Contact
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar