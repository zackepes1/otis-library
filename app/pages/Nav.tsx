"use client"

import * as React from "react"
import { booksandmore, departments, general, resources, services } from "@/constants";
import { BiSolidCategory } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { FaPeopleRoof } from "react-icons/fa6";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function Nav() {
  return (
    <div className="">
    <NavigationMenu className="z-10">
      <NavigationMenuList className="p-10 hidden xl:flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-otisBlue text-white font-oswald text-2xl relative">General
          </NavigationMenuTrigger>
          

          <NavigationMenuContent className="z-0">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <BiSolidCategory className="text-otisBlue text-7xl items-start flex"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      General Information
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {general.map ((links) => (
                <div key={links.id}>
                 
              <ListItem className="text-otisBlue" href={links.link} title={links.name}>
                {links.desc}
              </ListItem>
              </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-otisBlue text-white font-oswald text-2xl">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <MdMiscellaneousServices className="text-otisBlue text-7xl items-start flex"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Library Services
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {services.map ((links) => (
                <div key={links.id}>
                 
              <ListItem className="text-otisBlue" href={links.link} title={links.name}>
                {links.desc}
              </ListItem>
              </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-otisBlue text-white font-oswald text-2xl">Books</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <PiBooksFill className="text-otisBlue text-7xl items-start flex"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Books & More
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {booksandmore.map ((links) => (
                <div key={links.id}>
                 
              <ListItem className="text-otisBlue" href={links.link} title={links.name}>
                {links.desc}
              </ListItem>
              </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-otisBlue text-white font-oswald text-2xl">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <GrResources className="text-otisBlue text-7xl items-start flex"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Library Resources
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {resources.map ((links) => (
                <div key={links.id}>
                 
              <ListItem className="text-otisBlue" href={links.link} title={links.name}>
                {links.desc}
              </ListItem>
              </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-otisBlue text-white font-oswald text-2xl">Departments</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <FaPeopleRoof className="text-otisBlue text-7xl items-start flex"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Library Departments
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {departments.map ((links) => (
                <div key={links.id}>
                 
              <ListItem className="text-otisBlue" href={links.link} title={links.name}>
                {links.desc}
              </ListItem>
              </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Nav