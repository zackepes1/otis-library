'use client'
import { downloadables } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles, { layout } from "../../styles";
import {motion} from 'framer-motion';


const FeatureCard = ({ img, title, content, index, link }) => (
    <div className={`flex flex-col lg:flex-row p-6 ${index !== downloadables.length - 1 ? "mb-6" : "mb-0"} feature-card transition-all duration-700 rounded-lg justify-center items-center`}>
      <Link href={link}>
      <motion.div
       whileHover={{ scale: 1.1 }}
       transition= {{ duration: .3 }}
       className={`w-[150px] h-[150px] rounded-full ${styles.flexCenter} bg-secondary`}>
        <Image src={img} alt={title} className="w-full h-full p-2 object-contain inline" />
      </motion.div>
      </Link>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

const Downloadables = () => {
  return (
  <main className="flex-1 flex lg:flex-row flex-col text-secondary p-24 justify-center items-center">
    <div className="flex-1 flex flex-col">
      <h2 className="text-5xl font-oswald">
      Digital Delights
      </h2>
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition= {{duration: 1}}
      className={`${styles.paragraph} lg:max-w-[470px] leading-10 mt-5`}>
      For those on the go or seeking a paper-free experience, our vast e-book library is your portable portal to endless stories. Download your favorites onto your tablet, phone, or e-reader and enjoy reading anytime, anywhere.
      </motion.p>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center">
      {downloadables.map((media, index) => (
        <FeatureCard key={media.id} {...media} index={index} />
      ))}
    </div>
  </main>
  )
}

export default Downloadables