'use client'
import React from 'react'
import { downloadables } from '@/constants'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Downloadables = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:p-24 m-auto">
    <h1 className="text-5xl lg:text-7xl font-oswald text-otisBlue">eBooks? Audiobooks? Why only choose one?</h1>
    <p className="text-lg text-otisBlue p-5">Dive into Otis Library&apos;s Digital Downloads!</p>

    <div className="grid grid-cols-3 place-content-start place-items-start m-auto items-start max-w-[80%] gap-10">
      {downloadables.map((items) =>(
        <div key={items.id}>
          <motion.div
          className="grid place-content-start place-items-start"
          initial={{ opacity: 0, scale: 1, x: -200 }}
          whileHover={{ scale: 1.2 }}
          whileInView={{opacity: 1, x: 0 }}
          transition= {{duration: .6 }}
          >
          <Link href={items.link}>
            <Image className="h-[300px] p-10  object-contain" src={items.img} alt={items.title}/>
          </Link>
          </motion.div>
          <p className="font-poppins text-base text-otisBlue">{items.content}</p>
        </div>
        
      ))}
    </div>


    </div>
  )
}

export default Downloadables