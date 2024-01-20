"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaEnvelope, FaBookOpen } from "react-icons/fa";
import Link from 'next/link';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <main className="flex flex-col xl:flex-row">
        <div className="flex-1 flex-col flex mx-10">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-oswald font-semibold text-[72px] text-white">
          Where Curiosity  <br className="sm:block hidden" />
            <span>Ignites Imagination</span>
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="xl:max-w-[470px] mt-5 leading-10 text-white font-poppins">
        Otis Library serves as a vibrant community hub for lifelong learning and cultural exploration, catering to diverse interests and fostering a love of reading and knowledge in all ages. We go beyond the traditional library model, offering a blend of physical and digital resources, engaging programs, and innovative spaces that spark creativity and connection.
        </motion.p>
        <div className="flex flex-row  xl:justify-normal items-center justify-center gap-10 py-5"> 
        <Link href="https://nw.catalog.lionlibraries.org/">
        <Button variant="secondary">
        <FaBookOpen className="h-4 w-4 mr-2 text-blue-500" />
        Catalog
         </Button>
         </Link>
         <Link href="/contact-us">
         <Button variant="secondary">
        <FaEnvelope className="mr-2 h-4 w-4 text-blue-500" />
        Contact Us
         </Button>
      
         </Link>
  
          
        </div>
        </div>
        <div className="flex-1 flex md:my-0 my-10">
        <Image className="w-full h-full" alt="book" width={700} height={700} src="/../../assets/images/bookhero.png"/>
        </div>
    </main>
  )
}

export default Hero