import { default as BriefcaseIcon } from '../../assets/briefcase-alt.svg?react'
import { default as AwardIcon } from '../../assets/award.svg?react'
import { default as SupportIcon } from '../../assets/support-svgrepo-com.svg?react'

const Topics = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-[repeat(3,minmax(100px,150px))] gap-1">
        <div className="flex flex-col items-center py-3 rounded-2xl shadow-xl gap-2">
          <AwardIcon />
          <h4 className="text-[#333333] font-semibold">Experiencia</h4>
          <p className="text-sm">Junior</p>
        </div>
        <div className="flex flex-col items-center py-3 rounded-2xl shadow-xl gap-2">
          {/* briefcase-alt icon */}
          <BriefcaseIcon />
          <h4 className="text-[#333333] font-semibold">Completado</h4>
          <p className="text-sm">5 + Proyectos</p>
        </div>
        <div className="flex flex-col items-center py-3 rounded-2xl shadow-xl gap-2">
          <SupportIcon className="w-[2em] h-[2em]" />
          <h4 className="text-[#333333] font-semibold">Soporte</h4>
          <p className="text-sm">Online 24/7</p>
        </div>
      </div>
    </div>
  )
}

export default Topics
