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
import { bookdrops, hours, parking, staff, trustees } from '@/constants'
import { IoPersonCircle } from "react-icons/io5";
import { FaParking } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import styles,{layout} from "../../styles"

const HPB = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-auto p-4 lg:px-24 lg:pt-24">
    <h1 className="text-7xl font-oswald text-otisBlue">Find Your Way to Reading Bliss.</h1>
    <p className="text-lg text-otisBlue p-5">Whether you&apos;re a seasoned bookworm or a curious newcomer, Otis Library is your gateway to literary adventures. To make your library experience as smooth as turning the pages of a captivating story, here&apos;s everything you need to know about our hours, bookdrops, and parking options:</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 w-full p-10">
    <Table className="flex flex-col justify-center items-center">
  <TableHeader>
    <TableRow>
      <TableHead className="text-center text-2xl font-oswald text-otisBlue">Hours of Operation</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {hours.map((hour) => (
    <TableRow key={hour.id}>
      <TableCell className="font-medium  text-center justify-center text-otisBlue">{hour.title}</TableCell>
      <TableCell className="flex flex-row text-otisBlue">{hour.time}</TableCell>
    </TableRow>
      ))} 
  </TableBody>
</Table>
<div className="flex flex-col justify-start items-start">
    {parking.map ((parking) => (
        <div key={parking.id}>
              <div className="flex flex-col p-2 text-2xl font-oswald text-otisBlue justify-start items-start w-full" >
                  {parking.title}
                  <p className="font-poppins w-full text-base  leading-0 lg:leading-8 py-2 text-otisBlue">{parking.heading}</p>
              </div>
            </div>
      ))}
      <div className="flex flex-col items-center justify-center">
            <Link href="/parking.pdf">
        <Button className="ml-2">
        <FaParking className="h-6 w-6 mr-2 text-blue-500" />
        Parking Map
         </Button>
         </Link>
         </div>
      </div>
</div>
<Separator/>
</div>



    <div className="flex flex-col max-w-[80%] m-auto justify-center items-center pb-24 p-10">
    <div className="flex flex-col w-full">
        {bookdrops.map((books) => (
            <div key={books.id}>
                <div className="flex flex-row p-2 text-2xl font-oswald text-otisBlue justify-center items-center">
                {books.name}
                </div>
                {books.content.map((content) => (
                <div className="flex flex-col justify-center items-center font-poppins text-otisBlue m-auto" key={content.id}>
                    {content.name}
                </div>
            ))}
            </div>
        ))}
                   {bookdrops.map((books) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full gap-4" key={books.id}>
                {books.links.map((links) => (
                    <div className="flex flex-col mt-5 text-sm font-poppins text-otisBlue justify-center items-center" key={links.id}>
                        {links.location}
                        <div className="mt-5">
                        <a href={links.link}>
                       <Image alt={links.link} className="rounded-xl shadow-md flex flex-row" src={links.img}/>
                       </a>
                       </div>
                    </div>
                ))}
            </div>
           ))}
    </div>
    </div>

    </div>
  )
}

export default HPB