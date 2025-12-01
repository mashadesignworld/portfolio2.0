import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import  { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    
    
    
    id='services' className='w-full px-[12%] py-10 scroll-mt-2'>
        <motion.h4 
        
        initial={{y: -20, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{ delay: 0.3, duration: 0.5}}
        
        className='text-center mb-2 text-lg font-Ovo'>
            What i offer
        </motion.h4>
        <motion.h2
         initial={{y: -20, opacity: 0}}
         whileInView={{ y:0, opacity: 1}}
         transition={{ delay: 0.5, duration: 0.5}}
        
        className='text-center text-5xl font-Ovo'>
          Services
        </motion.h2>
        <motion.p 
        
        initial={{y: -20, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{ delay: 0.7, duration: 0.5}}
        
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I provide full-stack web development services, creating modern, scalable,
             and user-friendly applications tailored to your needs, with a focus on high-performance solutions.</motion.p>
        <motion.div 
        
        initial={{y: -20, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{ delay: 0.9, duration: 0.6}}
        
        
        className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index)=>(
                    <motion.div 
                    whileHover={{scale: 1.05}}
                    key={index} className='border border-gray-400 rounded-lg px-8 px-12
                    hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt="services" className='w-10 my-5' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>
                       <a href='https://watch-frlz.onrender.com/' target='_blank'>{description}</a> 
                    </p>
                    
                    </motion.div>
                ))}
        </motion.div>
    </motion.div>
  )
}

export default Services