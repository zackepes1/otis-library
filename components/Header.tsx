"use client"

import Nav from '@/app/pages/Nav'
import Image from 'next/image'
import React from 'react'
import Search from './Search'
import Link from 'next/link'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react'
import { nav } from '@/constants'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'



const Header = () => {
  const [heading, setHeading] = useState("");


  return (
    <div>
          <div className="p-20 flex flex-col xl:flex-row justify-center items-center relative  w-full bg-otisBlue">
        <Link href="/">
        <Image alt="logo" width="300" height="160" src="../../assets/images/otis-white.svg"/>
        </Link>
        <Nav/>
        <Search/>
        <div className="absolute top-2 right-6  text-sm font-poppins text-secondary justify-end text-end">
          <ul>
            <li className="leading-6">261 Main Street Norwich, CT 06360</li>
            <li className="leading-6">(860) 889-2365</li>
          </ul>
        </div>
        <div>

{/* Mobile Menu starts here */}
        <Sheet>
  <SheetTrigger>
  <IoMenuOutline className="text-5xl absolute top-6 left-6 text-secondary  flex xl:hidden"/>
  </SheetTrigger>
  <SheetContent side="right" className="w-3/4 max-w-7xl bg-white/20 backdrop-blur-lg">
    <SheetHeader>
      <SheetDescription>
      {nav.map((link) => (
            <div key={link.name} className="group ">
              <div className="font-oswald cursor-pointer font-semibold  py-4" onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading("");
              }}>
                <h1 className="text-secondary my-2 mx-6 transition duration-700 ease-in-out text-3xl font-oswald cursor-pointer">
                  {link.name}
                  <FiChevronRight className={`${heading === link.name ? "hidden" : "inline"} mx-2 group-hover:rotate-90 text-blue-500 transition duration-700`} />
                  <FiChevronDown className={`${heading === link.name ? "inline" : "hidden"} mx-2   text-blue-500 transition duration-700`} />
                  </h1>

                </div>
                {link.sublinks.map((mysublinks) =>
                (
                      <div key={mysublinks.name} className="flex flex-row ">
                        <h1 className={`${heading === link.name ? "flex" : "hidden"} font-poppins mx-10 cursor-pointer text-secondary justify-start text-start items-start font-semibold text-lg pb-5 h-full w-full hover:text-blue-500 transition duration-700 ease-in-out`}>
                        <SheetTrigger>
                          <Link className="w-full" href={mysublinks.link}>{mysublinks.name}</Link>
                          </SheetTrigger>
                        </h1>
                        </div>       
                 ))}
            </div>
        ))}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          {/* Mobile Menu ends here */}
</div>
        </div>
    </div>
  )
}

export default Header