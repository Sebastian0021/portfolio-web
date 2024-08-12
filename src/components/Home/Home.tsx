// import carnet from '../assets/carnet.jpg'
import './Home.css'
import { default as HandIcon } from '../../assets/hand.svg?react'
import { default as SendIcon } from '../../assets/send.svg?react'
import { default as ScrollIcon } from '../../assets/scroll.svg?react'
import { default as GithubIcon } from '../../assets/github.svg?react'
import { default as LinkedinIcon } from '../../assets/linkedin.svg?react'

const Home = () => {
  return (
    <section
      id="Home"
      className="mx-auto grid grid-cols-[auto_1fr] px-3 gap-3 sm:grid-cols-[auto_1fr_1fr] sm:gap-18 md:gap-20 w-full pt-32 md:pt-64 md:pb-52"
    >
      {/* <div
        className={`max-w-5xl mx-auto grid grid-cols-[auto_1fr] px-3 gap-3 sm:grid-cols-[auto_1fr_1fr] sm:gap-18 md:gap-20`}
      > */}
      <div className="text-[#333333] flex flex-col justify-center items-center text-2xl space-y-3 sm:col-start-1">
        <a href="https://github.com/Sebastian0021" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/sebastianpenalozafuentes/" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
      <div className="flex justify-center sm:col-start-3">
        {/* <img className="rounded-full max-h-80 object-cover shadow-2xl animation" src={carnet} alt="" /> */}
        <div className="animation"></div>
      </div>
      <div className="col-span-2 gap-2 flex flex-col  justify-center sm:col-auto sm:col-start-2 sm:col-end-3 sm:row-start-1">
        <div>
          <div className="flex w-full h-full space-x-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-[rgb(51,51,51)]">Sebastian Peñaloza</h1>
            <div className="h-full flex justify-center items-center">
              <HandIcon className="flex-shrink-0" />
            </div>
          </div>
        </div>
        <h2 className="text-[#333333] text-xl pl-20 subtitle">Frontend Developer</h2>
        <p>Soy un desarrollador web de Buenos Aires y me apaciona mucho lo que hago.</p>
        <button className="btn mt-6">
          Say Hello
          <SendIcon className="w-6 h-6 fill-current" />
        </button>
      </div>
      <div className="hidden col-start-2 md:block">
        <a href="#About" className="flex items-center gap-2">
          <ScrollIcon className="w-6 h-6 fill-current" />
          <span className="text-[#333333]">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
            <path
              fill="#333333"
              d="M17.71 11.29a1 1 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l5-5a1 1 0 0 0 0-1.42"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Home
