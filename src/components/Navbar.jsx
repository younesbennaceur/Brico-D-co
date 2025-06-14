import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='flex justify-between text-sm  py-6 items-center border-b bg-white px-4 sm:px-[5%] opacity-85 border-gray-200'>
      <img src={logo} alt="Logo" className='w-40 cursor-pointer' />
      
      <ul className='hidden md:flex font-normal justify-between gap-8'>
        <li>
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            Accueil
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/projets' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            Projets
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/produits' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            Produits
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/a-propos' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            À propos
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/faq' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            FAQ
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => 
              `py-1 px-2 rounded-md transition-colors duration-300 ${
                isActive ? 'text-[var(--primary-color)] font-medium' : 'text-gray-600 hover:text-[var(--primary-color)] hover:bg-[var(--hover-bg)]'
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
       <NavLink
          to="/projets" // ou autre route souhaitée
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm"
        >
          Créer ensemble
        </NavLink>
    </nav>
  )
}