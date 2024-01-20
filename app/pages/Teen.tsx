import React from 'react'
import styles, { layout } from "../../styles";
import { bookshelf, janbooklist } from '@/assets';
import Image from 'next/image';
import { IoBookOutline } from "react-icons/io5";
import { CalendarDays } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Teen = () => {
  return (
    <div>

        <div className="flex flex-row m-auto justify-center items-center">
          <div className="relative max-w-1/2">
            <Image src={bookshelf} alt="January Books"  className="shadow-lg shadow-black/30 " width={1000} height={1000}/>
            <div className="text-secondary flex flex-row m-auto justify-center items-center absolute bottom-40 right-[110px]">
            <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-3xl font-bold font-shadows hidden xl:flex" variant="link">New Arrivals</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
        <IoBookOutline className="text-otisBlue text-7xl"/>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold ">Fiction</h4>
            <ul className="text-sm">
              <li>Curious Tides</li>
              <li>The Weight of Blood</li>
              <li>Tower of Dawn</li>
              <li>Their Viscous Games</li>
            </ul>
            <h4 className="text-sm font-semibold ">Español</h4>
            <ul className="text-sm">
              <li>Claro de Luna</li>
              <li>Habla</li>
              <li>Fabricante de Lagrimas</li>
              <li>El Legado Robado</li>
            </ul>
            <h4 className="text-sm font-semibold ">Graphic Novels</h4>
            <ul className="text-sm">
              <li>Jujutsu Kaisen #21</li>
              <li>One Piece #1</li>
            </ul>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                New January 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
      </div>
      </div>
    <div className={`${layout.section}  flex-col text-5xl font-oswald text-otisBlue p-10`}>Teen Zone & Children&apos;s Corner
    <p className="font-poppins text-lg text-otisBlue mt-10 leading-10 max-w-[470px]">Forget boring libraries... This ain&apos;t your grandma&apos;s reading room. This is the Otis Library Teen Zone, your ultimate hangout for books, games, tech, and all things awesome. Escape the real world and step into a universe built just for you.</p>
    </div>
    </div>
    </div>
  )
}

export default Teen