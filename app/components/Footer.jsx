import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image  src={isDarkMode ? assets.logonew : assets.logo}  alt='logo' 
            className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center 
           gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='logo' 
            className='w-6' />
            njugunak.kevin@gmail.com
            </div>
        </div>
                <div className='text-center sm:flex  items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                    <p className='font-Ovo border-l border-gray-400 h-15 pl-4'>&copy; 2025 Masha Designs</p>
                    <ul className='flex items-center gap-10 justify-center
                     mt-4 sm:mt-0 border-r border-gray-400 h-15 pr-4 '>
                        <li>
                            <a href="https://github.com/mashadesignworld" target='_blank'>Github</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/kevin-macharia-584b7861" target='_blank'>LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://x.com/KevinMa43457608" target='_blank'>Twitter</a>
                        </li>
                    </ul>
                </div>

    </div>
  )
}

export default Footer