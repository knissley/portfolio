import React, { FC } from 'react';
import './WorkExperience.css';
import workExperience from '../constants/workExperience';
import ExperienceListItem from './ExperienceListItem';
import { motion } from 'framer-motion'


interface Props {};

const WorkExperience:FC<Props> = () => {



  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once:true}} className='work-experience-container'>
      <h2>Where I've Been</h2>
      <div className='work-experience'>
        <ul className='work-experience-list'>
          {
            workExperience.map((job) => <ExperienceListItem key={job.title} job={job} />)
          }
        </ul>
      </div>
    </motion.div>
  )
};

export default WorkExperience;