import { useState } from 'react'
import { Link } from 'react-scroll'
import { default as EducationIcon } from '../assets/education.svg?react'
import { default as FileIcon } from '../assets/file-alt.svg?react'
import { default as HomeIcon } from '../assets/home.svg?react'
import { default as UserIcon } from '../assets/user.svg?react'
import { default as SceneryIcon } from '../assets/scenery.svg?react'
import { default as MessageIcon } from '../assets/message.svg?react'
import { default as XIcon } from '../assets/times.svg?react'
import { default as AppsIcon } from '../assets/apps.svg?react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header
      className={`py-3 p-3 text-xl fixed bottom-0 bg-white w-full  md:bottom-auto shadow-[0_-1px_4px_rgba(0,0,0,0.15)] lg:px-0 flex z-10`}
    >
      <div
        className={`max-w-5xl mx-auto flex justify-between items-center md:flex-row ${showMenu ? 'flex-col' : ''} w-full`}
      >
        <Link
          to="/index.html"
          className={`${showMenu ? 'hidden md:block' : ''} font-bold text-[#333333] hover:cursor-pointer`}
          smooth={true}
          offset={50}
          duration={500}
        >
          Sebas
        </Link>
        <nav className={`${showMenu ? '' : 'hidden'} md:block text-[#333333]`}>
          <ul className={`${showMenu ? 'grid grid-cols-3 gap-8' : ''} md:flex md:gap-0 md:space-x-4`}>
            <li className="">
              <Link
                to="Home"
                className="flex flex-col items-center hover:font-bold font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                <HomeIcon className="md:hidden" />
                Home
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                to="About"
                className="text-xlg flex flex-col items-center hover:text-black font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                {/* <i className="md:hidden uil uil-user"></i> */}
                <UserIcon className="md:hidden w-[1em] h-[1em]" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="Skills"
                className="text-xlg flex flex-col items-center hover:text-black font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                <FileIcon className="md:hidden w-[1em]" />
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="Qualification"
                className="text-xlg flex flex-col items-center hover:text-black font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                <EducationIcon className="md:hidden" />
                Qualification
              </Link>
            </li>
            <li>
              <Link
                to="Portfolio"
                className="text-xl flex flex-col items-center hover:text-black font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                <SceneryIcon className="md:hidden w-[1em] h-[1em]" />
                Porfolio
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                className="text-xlg flex flex-col items-center hover:text-black font-medium"
                smooth={true}
                offset={50}
                duration={500}
              >
                <MessageIcon className="w-[1em] md:hidden" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden ml-auto hover:text-black text-2xl"
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          {showMenu ? (
            <XIcon className="w-[1em] h-[1em] fill-current text-xl" />
          ) : (
            <AppsIcon className="w-[1em] h-[1em] fill-current text-xl" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
