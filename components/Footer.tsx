'use client'

import Image from "next/image";
import { footerLinks, socialMedia } from "../constants";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { BiExpandVertical } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";


const Footer = () => (
  <div className={`flex flex-col m-auto justify-center h-full bg-primary  text-secondary` }>
      <div className="flex justify-center items-center pt-5">
      {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[36px] h-[36px] object-contain cursor-pointer hover:opacity-50 transition duration-1000 ease-in-out ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <div className="text-2xl font-oswald flex flex-col justify-center items-center">
            Connect With Us!
            </div>
      <div className="flex flex-col justify-start items-start md:items-start md:justify-center place-items-stretch h-full w-full md:grid md:p-4 md:grid-cols-3 lg:grid-cols-5  py-16 gap-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title}>
            <h4 className="font-oswald text-2xl md:pb-3 ">
              {footerlink.title}
            </h4>
            <ul>
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-sm p-2  hover:text-blue-500 cursor-pointer transition duration-700 ease-out hover:ease-in`}
                  onClick={() => window.location.href = (link.link)}
                >                
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  </div>
);

export default Footer;
