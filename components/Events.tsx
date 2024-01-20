'use client'
import styles, { layout } from "../styles";
import Image from "next/image";
import { adultprograms } from "@/constants";
import { PiInfoDuotone } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import {motion} from 'framer-motion';

const Events = () => {
  return (

<div>
  <section id="discover">
<h1 className="text-7xl font-oswald text-otisBlue px-10">Discover</h1>
    <main className="flex flex-col text-otisBlue p-10 lg:p-24">
    <div className="flex flex-col">
      <h2 className="text-5xl font-oswald">
      Adult Programs
      </h2>
    <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition= {{duration: 1}}
        className={`${styles.paragraph} mt-2 leading-10`}>
      Otis Library is bursting with excitement to announce our upcoming lineup of adult programs! Whether you&apos;re looking to ignite your creativity, expand your knowledge, or connect with fellow bookworms, we have something for everyone.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition= {{duration: 1}}
        className={`${styles.paragraph} font-semibold leading-10 mt-2`}>
      Here&apos;s a sneak peek at the amazing events waiting for you:
      </motion.p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2 lg:p-10">
        {adultprograms.map ((programs) => (
          <div key={programs.id}>
              <motion.div 
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0, }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 relative justify-items-center place-items-center bg-white shadow-md rounded-xl h-full font-poppins  group p-5">
                <Image alt={programs.title} className="w-[80%] h-[80%] rounded-xl object-contain " src={programs.img}/>
                  <a className="rounded-full" href={programs.link}>
                    <p className="text-2xl p-2 text-center font-oswald font-semibold group-hover:text-blue-500 transition-all duration-700 text-otisBlue">{programs.title}</p>
                  </a>
                  <Badge className="absolute top-2 left-2 bg-primary">{programs.format}</Badge> 
   
        <ul>
         <li className="text-center col-start-2">{programs.date}</li>
        <li className="text-center">{programs.time}</li>
         </ul>
         <Link href={programs.invite}>
         <FcGoogle className="text-blue-500 text-2xl absolute bottom-2 right-10" />
         </Link>
         <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            <PiInfoDuotone className="text-blue-500 text-2xl absolute bottom-2 right-2" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-poppins text-otisBlue max-w-[300px] text-center">{programs.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </motion.div>
        </div>
        ))}
        </div>
        </main>
        </section>
    </div>
          )
}

export default Events