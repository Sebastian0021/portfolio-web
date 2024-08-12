import { default as CheckIcon } from '../assets/check.svg?react'

const Skills = () => {
  const frontendSkills = [
    {
      technologi: 'HTML',
      experience: 'Intermediate',
    },
    {
      technologi: 'CSS',
      experience: 'Intermediate',
    },
    {
      technologi: 'JavaScript',
      experience: 'Intermediate',
    },
    {
      technologi: 'TypeScript',
      experience: 'Basic',
    },
    {
      technologi: 'Git',
      experience: 'Intermediate',
    },
    {
      technologi: 'React',
      experience: 'Intermediate',
    },
  ]

  const backendSkills = [
    {
      technologi: 'PHP',
      experience: 'Intermediate',
    },
    {
      technologi: 'Node Js',
      experience: 'Intermediate',
    },
    {
      technologi: 'MySQL',
      experience: 'Intermediate',
    },
    {
      technologi: 'Firebase',
      experience: 'Basic',
    },
    {
      technologi: 'Python',
      experience: 'Intermediate',
    },
    {
      technologi: 'SQL',
      experience: 'Intermediate',
    },
  ]

  const frontendSkillsElement = frontendSkills.map((skill) => (
    <li className="flex gap-3">
      <CheckIcon />
      <div>
        <strong className="text-[#333]">{skill.technologi}</strong>
        <p>{skill.experience}</p>
      </div>
    </li>
  ))

  const backendSKillsElement = backendSkills.map((skill) => (
    <li className="flex gap-3">
      <CheckIcon />
      <div>
        <strong className="text-[#333]">{skill.technologi}</strong>
        <p>{skill.experience}</p>
      </div>
    </li>
  ))

  return (
    <section id="Skills" className="section gap-6 pt-40 md:py-52">
      <h2 className="title">Skills</h2>
      <h3>My technical level</h3>
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="w-full flex flex-col items-center gap-3">
          <h4 className="text-center text-xl text-[#333] font-semibold">Frontend Developer</h4>
          <ul className="grid grid-cols-2 gap-y-9 gap-x-9 p-6 md:shadow-2xl shadow-md rounded-2xl">
            {frontendSkillsElement}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <h4 className="text-center text-xl text-[#333] font-semibold">Backend Developer</h4>
          <ul className="grid grid-cols-2 gap-y-9 gap-x-9 p-6 md:shadow-2xl shadow-md rounded-2xl">
            {backendSKillsElement}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
