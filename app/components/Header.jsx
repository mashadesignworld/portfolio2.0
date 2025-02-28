import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div className='mt-40'> 
        <Image src={assets.profile_img}  alt='profile' className='rounded-full w-32'/>
         </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-4 font-Ovo'>
            Hello, I'm Kevin Macharia <Image src={assets.hand_icon}  alt='profile' className='w-6'/></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Full Stack Developer based in Kenya</h1>
                <hr />
                <p className='max-w-2xl mx-auto font-Ovo'>
                I'm a full-stack web developer proficient in HTML5, CSS, React, and JavaScript, building robust front-end applications. 
                I also have back-end experience with nodejs,Laravel, creating REST APIs, and working with Mysql,MongoDB and GraphQL for database and API development.  
                This full-stack expertise allows me to deliver complete web solutions.
                </p>
                <div className='flex fex-col sm:flex-row items-center gap-4 mt-4'>
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