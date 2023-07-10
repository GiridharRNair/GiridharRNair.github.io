import React from 'react'
import { NavLink } from "react-router-dom";
import NavbarLinks from '../data/NavbarLinks';

function Navbar() {
  return (
    <nav className="flex sm:text-left sm:justify-between shadow dark:shadow-stone-700 pt-3 px-6 sm:items-baseline w-full">
        <div className="mb-3 space-x-5 flex flex-row">    
            {NavbarLinks.map(NavbarLink => (
                <p className='group' key={NavbarLink.id}>
                    <NavLink 
                        to={NavbarLink.path}
                        className={(navData) => (navData.isActive ? "py-1 text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-no-repeat bg-[length:100%_2px]" : "text-base py-1 text-stone-400 hover:text-stone-600 bg-left-bottom bg-gradient-to-r from-stone-600 to-stone-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out")}
                    >
                        {NavbarLink.title}
                    </NavLink>
                </p>   
            ))}
        </div>
    </nav>
  )
}

export default Navbar