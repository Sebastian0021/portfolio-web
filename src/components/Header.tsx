import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  // const linkStyle = showMenu ? 'flex flex-col items-center justify-center' : 'hidden md:block'

  return (
    <header
      className={`py-3 px-3 text-xl fixed bottom-0 bg-white w-full flex   justify-between items-center ${showMenu ? 'flex-col' : ''} md:static border`}
    >
      {/* <div className="max-w-2xl m-auto md:flex-row"></div> */}
      <a href="/index.html" className={`${showMenu ? 'hidden md:block' : ''} font-bold text-[#333333]`}>
        Sebas
      </a>
      <nav className={`${showMenu ? '' : 'hidden'} md:block text-[#333333]`}>
        <ul className={`${showMenu ? 'grid grid-cols-3 gap-8' : ''} md:flex md:gap-0 md:space-x-4`}>
          <li>
            <a href="#Home" className="flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-estate"></i>Home
            </a>
          </li>
          <li>
            <a href="" className="text-lg flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-user"></i>About
            </a>
          </li>
          <li>
            <a href="" className="text-lg flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-file-alt"></i>Skills
            </a>
          </li>
          <li>
            <a href="" className="text-lg flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-briefcase-alt"></i>Services
            </a>
          </li>
          <li>
            <a href="" className="text-lg flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-scenery"></i>Porfolio
            </a>
          </li>
          <li>
            <a href="" className="text-lg flex flex-col items-center hover:text-black font-medium">
              <i className="md:hidden uil uil-message"></i>Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden ml-auto hover:text-black"
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        {showMenu ? <i className="uil uil-times"></i> : <i className="uil uil-apps"></i>}
      </button>
    </header>
  )
}

export default Header
