"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { attractions, museum_passes } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center m-auto p-5 lg:p-24">
        <h1 className="lg:text-7xl  text-5xl font-oswald text-otisBlue text-center">Unlock Adventures Beyond Books</h1>
        <p className="text-lg text-otisBlue p-5 lg:pb-24 text-center">Explore Otis Library&apos;s Museum & Attraction Pass Program!</p>
        <div className="flex flex-col items-center justify-center lg:max-w-[80%]">
        <p className="text-lg text-otisBlue p-5 lg:pb-24 m-auto">At Otis Library, we believe learning goes beyond bookshelves. That&apos;s why we&apos;re thrilled to offer our Museum & Attraction Pass Program, providing your passport to explore the cultural and historical gems right here in our community (and beyond!). Checkout of passes is for a three day duration.</p>
        <div className="flex flex-col lg:flex-row justify-between px-10  gap-5 lg:gap-20">
        {museum_passes.map((passes) => (
          <div key={passes.id}>
            <h1 className="text-3xl font-oswald text-otisBlue p-5">{passes.title}</h1>
            {passes.sections.map((sections) =>(
              <div key={sections.id}>
                  <h1 className="p-2 text-otisBlue font-oswald text-2xl">{sections.title}</h1>
                  {sections.items.map((items) => (
                    <div key={items.id}>
                      <li className="px-4 text-otisBlue font-poppins">{items.content}</li>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {attractions.map((attract) =>(
          <div key={attract.id}>

        <Card className="h-full group relative flex flex-col lg:justify-between">
          <CardHeader className="">
            <CardTitle>{attract.title}</CardTitle>
            <CardDescription className="flex flex-col">
              {attract.address}
              <br/>
              {attract.phone}
              </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center h-[200px]">
          <Image alt={attract.title} className="flex flex-col items-center p-10 justify-center sm:max-w-[50%]" src={attract.img}/>
          </CardContent>
          <CardFooter className="flex flex-col justify-end items-end">
            <Link href={attract.link}>
              <Button>
              <IoOpenOutline className="h-6 w-6 text-blue-500 mr-2"/>
                Visit Website
                </Button>
            </Link>
            </CardFooter>
        </Card>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default page