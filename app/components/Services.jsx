import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import  { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-2'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            What i offer
        </h4>
        <h2 className='text-center text-5xl font-Ovo'>
          Services
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I provide full-stack web development services, creating modern, scalable,
             and user-friendly applications tailored to your needs, with a focus on high-performance solutions.</p>
        <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index)=>(
                    <div key={index} className='border border-gray-400 rounded-lg px-8 px-12
                    hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt="services" className='w-10 my-5' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>
                        {description}
                    </p>
                    
                    </div>
                ))}
        </div>
    </motion.div>
  )
}

export default Services