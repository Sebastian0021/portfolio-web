import { useState } from 'react'
import './Qualification.css'
import { default as EducationIcon } from '../../assets/education.svg?react'
import { default as BriefcaseIcon } from '../../assets/briefcase.svg?react'

const Qualification = () => {
  const [timeline, setTimeline] = useState('education')

  type qualification = {
    title: string
    place: string
    calendar: string
  }

  const educationArr = [
    {
      title: 'Técnico Electrónico',
      place: 'ET N1 Otto Krause',
      calendar: '2016 - 2022',
    },
    {
      title: 'Frontend Developer',
      place: 'Scrimba',
      calendar: '2023 - 2024',
    },
    {
      title: 'Cs. Computación',
      place: 'UBA',
      calendar: '2023 - Actualidad',
    },
    {
      title: 'Fullstack Developer',
      place: 'Coderhouse',
      calendar: '2024 - Actualidad',
    },
  ]

  const experienceArr = [
    {
      title: 'Software Developer',
      place: 'Google',
      calendar: '2022 - 2023',
    },
    {
      title: 'Frontend Developer',
      place: 'Microsoft',
      calendar: '2023 - 2024',
    },
    {
      title: 'Data Scientist',
      place: 'Facebook',
      calendar: '2023 - Actualidad',
    },
  ]

  const getQualificationElement = (qualification: qualification, i: number, arr: qualification[]) => {
    const dataELement = (
      <div>
        {/* qualification__title */}
        <h3 className="">{qualification.title}</h3>
        {/* qualification__subtitle */}
        <span className="">{qualification.place}</span>
        {/* qualification__calendar */}
        <div className="">{qualification.calendar}</div>
      </div>
    )

    const isEven = i % 2

    return (
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
        {isEven ? <div></div> : dataELement}

        <div>
          {/* qualification__rounder */}
          <span className="inline-block w-3 h-3 bg-[#757575] rounded-full"></span>
          {arr.length - 1 === i ? null : <span className="qualification__line"></span>}
        </div>

        {isEven ? dataELement : null}
      </div>
    )
  }

  const timeLineElements =
    timeline === 'education'
      ? educationArr.map((qualification, i, arr) => getQualificationElement(qualification, i, arr))
      : experienceArr.map((qualification, i, arr) => getQualificationElement(qualification, i, arr))

  return (
    <section id="Qualification" className="section pt-40 gap-6 md:py-52 ">
      <h2 className="title">Qualification</h2>
      <p>My personal journey</p>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 text-lg text-[#333] w-full justify-center">
          <button onClick={() => setTimeline('education')} className="flex items-center gap-1">
            <EducationIcon />
            Education
          </button>
          <button onClick={() => setTimeline('experience')} className="flex items-center gap-1">
            <BriefcaseIcon />
            Experience
          </button>
        </div>
        {timeLineElements && <div>{timeLineElements}</div>}
      </div>
    </section>
  )
}

export default Qualification
