import { workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import  { motion } from "motion/react";

const Work = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-2'>
      
      
<motion.h4 
  initial={{ opacity: 0, y:-20 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{duration: 0.5, delay: 0.3}}

className='text-center mb-2 text-lg font-Ovo'>
           My Work
        </motion.h4>
        <motion.h2 
        
        initial={{ opacity: 0, y:-20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 0.5, delay: 0.5}}
        
        className='text-center text-5xl font-Ovo'>
          Latest Projects
        </motion.h2>
        <motion.p 
        
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.6, delay:0.8}}
        
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I provide full-stack web development services, creating modern, scalable,
             and user-friendly applications tailored to your needs, with a focus on high-performance solutions.</motion.p>        
        <div className='grid grid-cols-auto my-10 gap-5'>
          {workData.map((project, index)=>(
            <motion.div 
            
            whileHover={{ scale: 1.05}}
            
            key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
              <div className='bg-white w-10/12 rounded-md 
              absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
              duration-500 group-hover:bottom-7'>
                <div>
                  <a href={project.url} target='_blank'>
                  <h2 className='font-semibold text-gray-700  '>{project.title}</h2>
                  <p className='text-sm text-gray-700 '>{project.description}</p></a>
                </div>
                <div className='border rounded-full border-black w-9
                aspect-square flex items-center justify-center {
          shadow-[2px_2px_0_#000] group-hover:bg-red-300 transition'>
                   <Image src={assets.send_icon} alt="send" className='w-5'/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    
      
      </div>
  )
}

export default Work