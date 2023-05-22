import { Link } from 'react-router-dom'
import Logo from "/images/logo.png"
import { AiOutlineMenu } from 'react-icons/ai'
// import { menuItems } from "../assets/utility/utitly.tsx"
import {  useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className="flex w-full items-center justify-between flex-wrap font-sans font-semibold p-6">
      <div className="flex items-center flex-shrink-0 text-white  md:mr-6">
        <a href="/"> <img src={Logo} alt="Logo" className="h-8 w-auto mr-2" /></a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 focus:bg-white  hover:border-white" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu />
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-2 absolute md:static top-[45px]  z-10 bg-white right-0 left-0 py-[10px] pl-[20px] ">
        {/* { ${toggleMenu ? "hidden" : "flex"} md:${toggleMenu ? "flex" : "flex"} } */}
        {
          <div className={` ${!isOpen && `hidden` }  flex flex-col lg:flex gap-4  lg:flex-row text-sm lg:flex-grow transition-transform duration-300 ease-in-out`}>


            <Link to="/" onClick={() => setIsOpen(true)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(true)}>About</Link>
            <Link to="/mbbs_abroad" onClick={() => setIsOpen(true)}>MBBS Abroad</Link>
            <Link to="/study_abroad" onClick={() => setIsOpen(true)}>Study Abroad</Link>
            <Link to="/uk&Europe" onClick={() => setIsOpen(true)}>UK & Europe</Link>
            <Link to="/study_india" onClick={() => setIsOpen(true)}>Study India</Link>
            <Link to="/canada&Australia" onClick={() => setIsOpen(true)}>Canada & Australia</Link>
            <Link to="/contact_us" onClick={() => setIsOpen(true)}>Contact Us</Link>
          </div>
        }

      </div>
    </nav>
  )
}

export default Header