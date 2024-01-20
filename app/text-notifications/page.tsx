
import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import Image from 'next/image';
import { iphone } from '@/assets';
import { text_notifications } from '@/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IoNotificationsCircle } from "react-icons/io5";


const TextNotifications = () => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center p-24">
        <h1 className="text-7xl font-oswald text-otisBlue">Stay in the Know, Wherever You Go.</h1>
        <p className="text-lg text-otisBlue p-5 pb-24">Sign Up for Otis Library&apos;s Text Notifications!</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full  max-w-[80%]">
        <div className="relative">
            <Image src={iphone} alt="iphone" className="w-auto h-auto max-h-[700px]"/>
            <div className="absolute hidden xl:flex md:top-48 md:right-0 lg:top-52 right-6 lg:right-48 xl:left-[20px] ">
            <IoIosNotifications className="text-[300px] xl:text-[300px] flex items-center justify-center text-blue-500 animate-bounce"/>
            </div>
        </div>
        <div>
            <div className="font-oswald text-2xl text-otisBlue">Tired of missing out on library updates because your inbox is overflowing? </div>
            <div className="font-poppins text-base text-otisBlue p-4"> Otis Library is breaking through the clutter with text notifications, delivering important alerts and reminders straight to your phone. It&apos;s the perfect way to stay connected to your library without missing a beat!</div>
        
        {text_notifications.map((text) => (
                <div key={text.id}>
                    {text.contents.map((content) => (
                        <div key={content.id}>
                            <div className="font-poppins text-base text-otisBlue p-4">{content.content}</div>
                        
                        </div>
                    ))}
                    {text.links.map((links) => (
                        <div className="flex flex-col lg:flex-row justify-center items-center" key={links.id}>
                        <Link className="text-blue-500 font-poppins text-base p-4" href={links.link}>
                            <Button className="">
                                <IoNotificationsCircle className="mx-2 h-6 w-6 text-blue-500"/>
                                Subscribe
                            </Button>
                        </Link>
                        </div>
                    ))}
                </div>
            ))}

        </div>

        </div>
       </div>
       </div>
  )
}

export default TextNotifications