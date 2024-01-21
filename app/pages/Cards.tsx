'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { homeCards } from '@/constants'
import Image from 'next/image'
import { IoOpenOutline } from "react-icons/io5";
import Link from 'next/link'
import {motion} from 'framer-motion';


const Cards = () => {
  return (
    <div>
      <section id="explore">
      <h1 className="text-7xl font-oswald text-secondary p-10">Explore</h1>
    <motion.div
     initial={{ opacity: 0, x: -200 }}
     whileInView={{ opacity: 1, x: 0, }}
     transition={{ duration: .7 }}
     viewport={{ once: true }}
     className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-4 lg:p-24">
    {homeCards.map ((cards) => (
        <div key={cards.id}>

<Card className="bg-secondary h-full w-full group relative overflow-hidden">
  <CardHeader>
    <CardTitle className="text-otisBlue group-hover:text-blue-500 transition-all duration-700">{cards.title}</CardTitle>
    <CardDescription className="justify-center flex">
        <Image className="rounded-lg group-hover:decoration-primary-foreground" src={cards.img} alt={cards.title}/>
    </CardDescription>
  </CardHeader>
  <CardContent className="flex justify-center">

  <Link href={cards.link}>
    <p className="text-otisBlue font-poppins text-base">{cards.content}</p>
    <IoOpenOutline className=" lg:text-2xl text-blue-500 inline ml-2 absolute bottom-2 right-2 origin-center hover:text-4xl transition-all duration-200 ease-in" />
    </Link>
  </CardContent>
</Card>

</div>
    ))}
    </motion.div>
    </section>
    </div>
  )
}

export default Cards