"use client"
import Donate from '@/components/Donate'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { donorspotlight } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosMail } from 'react-icons/io'
import { IoPersonCircle } from 'react-icons/io5'
import { PiPhoneCallDuotone } from 'react-icons/pi'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto p-5 lg:p-24">
        <h1 className="text-5xl lg:text-7xl font-oswald text-otisBlue">A Library Built by Community.</h1>
            <p className="text-lg text-otisBlue p-5">Celebrating Our Inspiring Donors!</p>
            <div className="flex flex-col">
                            <div className="flex-1 flex lg:flex-row flex-col text-secondary p-10 justify-center items-center">
                                <div className="flex-1 flex flex-col">
                             <Donate/>
                                </div>
                                        <div className="flex-1 flex flex-col justify-center items-center relative">
                                        <p className="text-otisBlue text-base font-poppins p-5 leading-8">Become an Otis Library Supporter! Your generous gift, no matter what size, works together with other gifts to ensure that the Library is able to provide the materials, programs, and services that are needed to strengthen our community. Please contact Andrea Kaiser, Director of Development, with questions, or to discuss the impact of your donation.</p>
<Card className="text-otisBlue justify-center items-center flex flex-col group h-1/2 w-1/2 relative">
  <CardHeader>
    <CardTitle className="font-oswald text-3xl justify-center items-center flex flex-col group-hover:text-blue-500 transition-all duration-700 ease-in-out">Andrea Kaiser</CardTitle>
    <CardDescription className="justify-center items-center flex flex-col">Director of Development</CardDescription>
  </CardHeader>
  <Separator/>
  <CardContent className="place-content-center pt-3">
  <IoPersonCircle className="text-[100px] text-primary"/>
  </CardContent>
  <CardFooter>
  <Link href="mailto:akaiser@otislibrarynorwich.org">
  <IoIosMail className="text-3xl text-blue-500 absolute bottom-2 right-2"/>
  </Link>
    <Badge>
    <PiPhoneCallDuotone className="text-3xl text-blue-500"/>
        860-889-2365 x127
    </Badge>


  </CardFooter>
</Card>
                                        </div>
                            </div>
                        </div>
            <Separator/>
        <div className="flex flex-col m-auto justify-center items-center">
            {donorspotlight.map((donor) => (
                <div key={donor.id}>
                    {donor.sections.map((sections) =>(
                        <div className="flex flex-col" key={sections.id}>
                            <div className="flex-1 flex lg:flex-row flex-col text-secondary p-24 justify-center items-center">
                                <div className="flex-1 flex flex-col">
                                    <h1 className="text-center font-oswald text-5xl text-otisBlue p-10">{sections.title}</h1>
                                        {sections.contents.map((contents) =>(
                                            <div key={contents.id}>
                                             <p className="p-5 leading-8 text-base font-poppins text-otisBlue max-w-[80%] m-auto">{contents.content}</p>
                                            </div>
                                        ))}
                                </div>
                                        <div className="flex-1 flex flex-col justify-center items-center">
                                        <Image className="rounded-xl object-contain" src={sections.img} alt={sections.title}/>
                                        </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
    </div>
  )
}

export default page