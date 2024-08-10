import carnet from '../assets/carnet.jpg'
import Topics from './Topics'
import CV from '../assets/CV Sebastian Peñaloza.pdf'

const About = () => {
  return (
    <section className="section mt-40 md:mt-96 gap-6">
      <h2 className="title">About Me</h2>
      <h3>My Introduction</h3>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
        <img className="w-80 rounded-2xl shadow-xl" src={carnet} alt="" />
        <div className="flex flex-col gap-8 md:gap-0 h-full justify-between">
          <Topics />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in praesentium, tempora voluptate eos aperiam
            perspiciatis aliquid, itaque delectus error esse nobis est consequatur commodi mollitia. Minima ducimus quis
            voluptatum.
          </p>
          <a
            href={CV}
            download="CV-Sebastian-Peñaloza"
            className="bg-[#333333] flex items-center justify-center rounded-2xl w-fit px-6 py-4 text-white font-semibold mt-6 gap-2 mx-auto md:mx-0"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.1 0a1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m6.71 6.29a1 1 0 0 0-1.42 0l-.29.3V16a1 1 0 0 0-2 0v2.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 0-1.42M12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
