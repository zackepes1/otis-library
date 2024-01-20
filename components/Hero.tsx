"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaEnvelope, FaBookOpen } from "react-icons/fa";
import Link from 'next/link';
import { vintagebook } from '@/assets';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen bg-center bg-fixed bg-cover custom-img relative p-10">
    <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-2xl p-5 w-full lg:max-w-[50%] m-auto">
        <div className="flex flex-row items-center justify-center w-full">
          <h1 className="font-oswald text-center font-semibold lg:text-[72px] text-[30px] text-secondary">
          Where Curiosity  <br className="sm:block hidden" />
            Ignites <span className="text-blue-500">Imagination</span>
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="xl:max-w-[770px] mt-5 lg:leading-10 text-secondary font-poppins">
        Otis Library serves as a vibrant community hub for lifelong learning and cultural exploration, catering to diverse interests and fostering a love of reading and knowledge in all ages. We go beyond the traditional library model, offering a blend of physical and digital resources, engaging programs, and innovative spaces that spark creativity and connection.
        </motion.p>
        <div className="flex flex-row  xl:justify-normal items-center justify-center gap-10 py-5"> 
        <Link href="https://nw.catalog.lionlibraries.org/">
        <Button variant={'secondary'}>
        <FaBookOpen className="h-4 w-4 mr-2 text-blue-500" />
        Catalog
         </Button>
         </Link>
         <Link href="/contact-us">
         <Button variant={'secondary'}>
        <FaEnvelope className="mr-2 h-4 w-4 text-blue-500" />
        Contact Us
         </Button>
         </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero