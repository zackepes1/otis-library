"use client"
import React from 'react'
import { useState } from "react";
import { nfa1 } from '@/assets';
import Image from 'next/image';
import { nfaexhibit } from '@/constants';
import ExhibitCard from '@/components/ExhibitCard';


const OnExhibit = () => {

    const [exhibitImg, setexhibitImg] = useState(nfa1);
    
  return (
    <div>
 <div className="flex flex-col items-center justify-center m-auto  p-5 lg:p-24">
    <h1 className="text-7xl font-oswald text-otisBlue text-center">Journey Through Time.</h1>
    <p className="text-lg text-otisBlue p-5 text-center"> Explore Otis Library&apos;s Captivating Exhibits!</p>
    <p className="text-lg text-otisBlue p-5">Step beyond the stacks and embark on a journey through history, creativity, and wonder at Otis Library&apos;s captivating exhibits! We host a diverse range of displays, offering something for every curiosity and every corner of your imagination.</p>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
                <div>
                    <h1 className="text-5xl font-oswald text-otisBlue p-5">Featured Exhibitions:</h1>
                    <h2 className="text-3xl font-oswald text-otisBlue lg:p-5">Norwich Free Academy vs. Everybody: Inside the Nation&apos;s Oldest High School Rivalry</h2>
                    <p className="text-lg font-poppins text-otisBlue p-5">Norwich Free Academy Yearbook Collection: Dive into the memories of generations past through our extensive collection of historic NFA yearbooks. Witness the evolution of fashion, hairstyles, and student life from the early 20th century to the present day. Relive school triumphs, sports victories, and candid moments that capture the essence of a bygone era.</p>
                </div>
             <div className='relative flex flex-col justify-center items-start'>
        <Image
          src={exhibitImg}
          alt='exhibit images'
          className='object-contain relative rounded-xl shadow-md hidden md:block'
        />

        <div className='flex flex-row flex-wrap justify-center gap-4 items-center rounded-xl'>
          {nfaexhibit.map((image, index) => (
            <div key={index}>
              <ExhibitCard
                index={index}
                imgURL={image}
                changeExhibitImage={(nfaexhibit) => setexhibitImg(nfaexhibit)}
                exhibitImage={exhibitImg}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default OnExhibit