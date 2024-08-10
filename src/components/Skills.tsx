const Skills = () => {
  const checkSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" style={{ fill: '#333' }}>
      <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
    </svg>
  )

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
      {checkSvg}
      <div>
        <strong className="text-[#333]">{skill.technologi}</strong>
        <p>{skill.experience}</p>
      </div>
    </li>
  ))

  const backendSKillsElement = backendSkills.map((skill) => (
    <li className="flex gap-3">
      {checkSvg}
      <div>
        <strong className="text-[#333]">{skill.technologi}</strong>
        <p>{skill.experience}</p>
      </div>
    </li>
  ))

  return (
    <section className="section gap-6 mt-40 md:mt-96">
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
