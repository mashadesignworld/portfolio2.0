import { infoList, toolsData } from '@/assets/assets';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => { // Removed setDarkMode if not used
  return (
    <div
      id="about"
      className={`w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 my-10 sm:my-20">
        {/* Profile Image */}
        <div className="w-48 sm:w-64 lg:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="Kevin Macharia"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base md:text-lg font-Ovo">
            A full-stack web developer skilled in React, Next.js, Express, Node.js, and MongoDB, I create modern,
            scalable, and user-friendly web applications. With a strong foundation in PHP (Laravel), MySQL, and WordPress, 
            I also work with RESTful APIs, GraphQL, CI/CD pipelines, and cloud deployment to build high-performance solutions.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-1 duration-500 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 sm:w-7 mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h3 className="mt-6 sm:mt-8 text-base sm:text-lg font-Ovo text-gray-700 dark:text-white">
            Tools that I use
          </h3>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-5 mt-4">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-6 lg:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;