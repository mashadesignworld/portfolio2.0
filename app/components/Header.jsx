import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import  { motion } from "motion/react"
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        > 
        <Image src={assets.profile_img}  alt='profile' className='rounded-full w-24 sm:w-32 md:w-40 mt-16 sm:mt-20 lg:mt-28'/>
         </motion.div>
         <h3 className='flex items-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 font-Ovo'>
            Hello, I'm Kevin Macharia <Image src={assets.hand_icon}  alt='profile' className='w-6'/></h3>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight'>
                Full Stack Developer based in Kenya</h1>
                <hr />
                <p className='max-w-2xl mx-auto font-Ovo'>
                I'm a full-stack web developer proficient in HTML5, CSS, React, and JavaScript, building robust front-end applications. 
                I also have back-end experience with nodejs,Laravel, creating REST APIs, and working with Mysql,MongoDB and GraphQL for database and API development.  
                This full-stack expertise allows me to deliver complete web solutions.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href='#contact'  className='px-10 py-3 border-white rounded-full bg-black text-white border-gray-500 flex 
                     items-center gap-2'>Contact Me<Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
                    <a href='/cv.pdf' download
                     className='px-10 py-3 border rounded-full border-gray-500 flex 
                     items-center gap-2'>My Resume<Image src={assets.download_icon} alt='' className='w-4' /></a>
                </div>
    </div>
  )
}

export default Header