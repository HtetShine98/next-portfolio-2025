'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

interface Props {
  year: string
  role: string
  company: string
  description: string
  index: number
}

const ExperienceItem = ({ year, role, company, description, index }: Props) => {
  return (
    <motion.div
      variants={slideInFromLeft(index * 0.3)}
      className="border-l-4 border-blue-500 pl-6 relative"
    >
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>

      {/* Experience content */}
      <p className="text-sm text-gray-400">{year}</p>
      <h3 className="text-lg font-semibold text-white">
        {role} <span className="text-blue-400">@ {company}</span>
      </h3>
      <p className="text-sm text-gray-300 mt-1">{description}</p>
    </motion.div>
  )
}

export default ExperienceItem
