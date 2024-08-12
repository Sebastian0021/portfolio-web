import carnet from '../../assets/carnet.jpg'
import Topics from './Topics'
import CV from '../../assets/CV Sebastian Peñaloza.pdf'
import { default as DownloadFileIcon } from '../../assets/download-file.svg?react'

const About = () => {
  return (
    <section id="About" className="section pt-40 md:py-52 gap-6">
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
          <a href={CV} download="CV-Sebastian-Peñaloza" className="btn mt-6 mx-auto md:mx-0">
            Download CV
            <DownloadFileIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
