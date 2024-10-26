import React from 'react'
import { motion } from 'framer-motion';
import './Hero.css'
import dark_arrow from '../../assets/black-Arrow.png'
import cover from '../../assets/cover.webp'

const Hero = () => {
  return (
    <div className='hero container'>
      <img src={cover} alt="" className='hero-img'/>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='hero-text'>
            <h1>A Better Way to Learn English</h1>
            <p>Unlock your potential with personalized language courses
            Whether for career advancement, travel, or personal growth, mastering English has never been easier. Join our tailored courses and take the first step toward fluency today.</p>
            <button className='btn'>Explore more <img src={dark_arrow} className='arrow' /></button>
        </div>
        </motion.div>
    </div>
  )
}

export default Hero