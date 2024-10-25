import React from 'react'
import './Programs.css'
import program_1 from '../../assets/prog1.jpg'
import program_2 from '../../assets/prog2.jpg'
import program_3 from '../../assets/prog3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="Beginner Level" />
        <div className="caption">
            <img src={program_icon_1} alt="Beginner Icon" />
            <p>Beginner English</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Intermediate Level" />
        <div className="caption">
            <img src={program_icon_1} alt="Intermediate Icon" />
            <p>Intermediate English</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Advanced Level" />
        <div className="caption">
            <img src={program_icon_1} alt="Advanced Icon" />
            <p>Advanced English</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
