import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <nav className="flex sm:text-left sm:justify-between shadow dark:shadow-stone-700 pt-3 px-6 sm:items-baseline w-full">
        <div className="mb-3 space-x-5 flex flex-row">    
            <p className='group'>
                <NavLink 
                    to="/" 
                    className={(navData) => (navData.isActive ? "text-stone-600" : "text-base py-1 text-stone-400 hover:text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out")}
                >
                    About
                </NavLink>
            </p>   
            <p className='group'>      
                <NavLink 
                    to="/Projects" 
                    className={(navData) => (navData.isActive ? "text-stone-600" : "text-base py-1 text-stone-400 hover:text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out")}
                >
                    Projects
                </NavLink>
            </p> 
            <p className='group'>      
                <NavLink 
                    to="/Timeline" 
                    className={(navData) => (navData.isActive ? "text-stone-600" : "text-base py-1 text-stone-400 hover:text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out")}
                >
                    Timeline
                </NavLink>
            </p>
            <p className='group'>    
                <NavLink 
                    to="/Contact" 
                    className={(navData) => (navData.isActive ? "text-stone-600" : "text-base py-1 text-stone-400 hover:text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out")}
                >
                    Contact
                </NavLink>
            </p>
        </div>
    </nav>
  )
}

export default Navbar