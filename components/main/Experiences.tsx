import { experienceData } from '@/constants'
import React from 'react'
import ExperienceText from '../sub/ExperienceText'
import ExperienceItem from '../sub/ExperienceItem'

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <ExperienceText />

      <div className="w-full max-w-3xl mt-10 space-y-10">
        {experienceData.map((exp, index) => (
          <ExperienceItem
            key={index}
            year={exp.year}
            role={exp.role}
            company={exp.company}
            description={exp.description}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Experiences
