import React from 'react'
import { lvec } from '@/assets'
import Image from 'next/image'
import { literacy } from '@/constants'
import { Button } from '@/components/ui/button'
import { IoIosSchool } from "react-icons/io";
import Link from 'next/link'

const LiteracyVolunteers = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center m-auto p-24">
    <h1 className="text-7xl font-oswald text-otisBlue">Empowering Literacy Together.</h1>
        <p className="text-lg text-otisBlue p-5">Otis Library and Literacy Volunteers of Eastern Connecticut</p>
        </div>
        <div className="grid grid-cols-2 m-auto max-w-[80%] pb-24">
            {/* <Image src={lvec} alt="lvec" className="w-auto h-auto"/> */}
       {literacy.map((lit) => (
        <div className="flex flex-col " key={lit.id}>
            <h1 className="text-5xl font-oswald text-otisBlue text-center p-2">{lit.title}</h1>
            {lit.button.map((links) =>(
                <div className="" key={links.id}>
                    <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-poppins text-otisBlue p-5">{links.content}</p>
            
            <Link href={links.link}>
                
            <Button className="">
            <IoIosSchool className="w-6 h-6 mr-2 text-blue-500"/>
                {links.title}
            </Button>
            </Link>
            </div>
            </div>
            ))}
        </div>
       ))}
        </div>

        </div>
  )
}

export default LiteracyVolunteers