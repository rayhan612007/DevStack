

import { CiMenuBurger } from "react-icons/ci"
import logo from "../assets/logo-text.png"

export default function Navbar() {
  return (
    <div className="sticky container top-0 z-50 bg-white/80 backdrop-blur-lg pt-5 ">

      <div className='container flex justify-between mx-auto items-center'>
          
          <button className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none">
            <CiMenuBurger />        
          </button>

          <img src={logo} alt="Logo" className="w-fit" />
          
          <ul className='hidden md:flex justify-between gap-5 font-medium text-slate-600'>
              <li className="hover:text-slate-900 cursor-pointer transition">Home</li>
              <li className="hover:text-slate-900 cursor-pointer transition">Technologies</li>
              <li className="hover:text-slate-900 cursor-pointer transition">Projects</li>
              <li className="hover:text-slate-900 cursor-pointer transition">About</li>
              <li className="hover:text-slate-900 cursor-pointer transition">Contact</li>
          </ul>
          
          <div className='flex gap-1 sm:gap-3 items-center'>
              <button className="btn border-none bg-none rounded-4xl px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
                Sign In
              </button>            
              <button className="btn btn-secondary rounded-4xl">
                Sign Up
              </button>
          </div>
      </div>
      <div className="divider"></div>

    </div>
  )
}