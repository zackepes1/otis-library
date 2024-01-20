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
import { staff, trustees } from '@/constants'
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { TfiAgenda } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto p-5 lg:p-24">
    <h1 className="text-5xl lg:text-7xl font-oswald text-otisBlue">We&apos;d love to hear from you.</h1>
    <p className="text-lg text-otisBlue p-5">Questions, compliments, or just curious? Get in touch!</p>

    <div className="flex flex-col max-w-[80%] m-auto justify-center items-center">
    <h1 className="text-5xl flex flex-col justify-start items-start font-oswald text-otisBlue p-10">Library Staff</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-evenly">
      {staff.map ((staff) =>(
        <div key={staff.id} className="relative">
      <Card className="text-otisBlue justify-center items-center flex flex-col group h-full w-full">
  <CardHeader>
    <CardTitle className="font-oswald text-3xl justify-center items-center flex flex-col group-hover:text-blue-500 transition-all duration-700 ease-in-out">{staff.name}</CardTitle>
    <CardDescription className="justify-center items-center flex flex-col">{staff.title}</CardDescription>
  </CardHeader>
  <Separator/>
  <CardContent className="place-content-center pt-3">
  <IoPersonCircle className="text-[100px] text-primary"/>
  </CardContent>
  <CardFooter>
  <Link href={staff.link}>
  <IoIosMail className="text-3xl text-blue-500 absolute bottom-2 right-2"/>
  </Link>
  </CardFooter>
</Card>
</div>
      ))}
    </div>
    </div>
    <div className="flex flex-col max-w-[80%] m-auto justify-center items-center ">
      <section id="board">
    <h1 className="text-5xl flex flex-col justify-center items-center font-oswald text-otisBlue pt-10">Board of Trustees</h1>
    <p className="text-lg text-center text-otisBlue p-5">Any Trustee may be contacted by mail addressed to: c/o Otis Library, 261 Main Street, Norwich, CT 06360.</p>
    <div className="flex flex-row justify-center items-center p-5 py-10 gap-10">
      <Link href="/agenda.pdf">
      <Button className="">
      <TfiAgenda className="mx-2"/>
      Board Agenda
      </Button>
      </Link>
      <Link href="/minutes.pdf">
      <Button className="">
      <GrNotes className="mx-2"/>
      Board Minutes      
      </Button>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-evenly ">
      {trustees.map ((trustee) =>(
        <div key={trustee.id} className="relative">
      <Card className="text-otisBlue justify-center items-center flex flex-col group h-full w-full">
  <CardHeader>
    <CardTitle className="font-oswald text-3xl justify-center items-center flex flex-col">{trustee.name}</CardTitle>
    <CardDescription className="justify-center items-center flex flex-col">{trustee.title}</CardDescription>
  </CardHeader>
  <Separator/>
  <CardContent className="place-content-center pt-3">
  <IoPersonCircle className="text-[100px] text-primary"/>
  </CardContent>
  <CardFooter>
  </CardFooter>
</Card>
</div>
      ))}
    </div>
    </section>
    </div>
    </div>
  )
}

export default ContactUs