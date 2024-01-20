import React from 'react'
import { passports } from '@/assets'
import Image from 'next/image'
import { passport_whys, passport_info, passport_apply, passport_renew } from '@/constants'
import { FaTruckPlane } from "react-icons/fa6";
import { FaPassport } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Passports = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center  p-4 lg:p-24">
        <h1 className="text-7xl font-oswald text-otisBlue">Passport to Adventure Awaits.</h1>
        <p className="text-lg text-otisBlue p-5">Get Ready to Go at Otis Library!</p>

      <div className="lg:max-w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
        <Image src={passports} alt="passport" className="hidden lg:flex" height={700} width={700}/>
        {passport_info.map ((info) => (
            <div className="flex flex-col items-center" key={info.id}>
                {info.contents.map((contents) =>(
                    <div className="p-4 text-otisBlue font-poppins lg:leading-10" key={contents.id}>
                        {contents.content}

                    </div>
                ))}

                <Link className="text-blue-500 font-poppins text-base p-4 justify-center items-center" href={info.link}>
                    <Button className="">
                        <FaTruckPlane className="mx-2 h-6 w-6 text-blue-500"/>
                        Passport Information
                     </Button>
                </Link>
                {info.contactInfo.map ((contact) => (
                    <div className="flex flex-col items-center justify-center text-otisBlue" key={contact.id}>
                        <h1 className="font-oswald text-2xl text-otisBlue p-2">{contact.title}</h1>
                        <p className="font-poppins  text-otisBlue">{contact.name}</p>
                        <p className="font-poppins  text-otisBlue">{contact.phone}</p>
                    </div>
                ))}
            </div>
        ))}
        </div>
        <div className="flex flex-col w-full justify-center items-center xl:p-24">
        {passport_whys.map ((why) =>(
                <div key={why.id}>
                    <h1 className="text-3xl font-oswald text-otisBlue p-4">{why.title}</h1>
                    {why.sections.map((sections) =>(
                        <div key={sections.id}>
                            <h1 className="text-2xl font-oswald text-otisBlue p-2">{sections.label}</h1>
                            <p className="text-base font-poppins text-otisBlue p-2">{sections.content}</p>
                        </div>
                    ))}
                </div>
            
            ))}
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-20">
            {passport_apply.map((apply) => (
                <div className="flex flex-col justify-center items-center" key={apply.id}>
                   <h1 className="text-5xl font-oswald text-otisBlue p-2 text-center">{apply.title}</h1>
                    <p className="font-poppins text-otisBlue p-4">{apply.label}</p>
                    {apply.sections.map((sections) =>(
                    <div key={sections.id}>
                       <h1 className="text-3xl font-oswald text-otisBlue p-2"> {sections.title}</h1>
                       {sections.subsections.map((subsections) => (
                        <div key={subsections.id}>
                            <h1 className="text-2xl font-oswald text-otisBlue p-2">{subsections.title}</h1>
                            {subsections.contents?.map((contents) =>(
                                <div key={contents.id}>
                                    <p className="font-poppins text-otisBlue p-4">{contents.content}</p>
                                    {contents.items?.map((items) =>(
                                        <div key={items.id}>
                                            <li className="font-poppins text-otisBlue px-8">{items.item}</li>
                                        </div>
                                        
                                    ))}
                                </div>
                            ))}
                        </div>
                       ))}
                    </div>
                    ))}
                </div>
            ))}
            <div>
                {passport_renew.map((renew) => (
                    <div className="items-center flex flex-col" key={renew.id}>
                        <h1 className="text-5xl font-oswald text-otisBlue p-2">{renew.title}</h1>
                        <p className="font-poppins text-otisBlue p-4">{renew.label}</p>
                        <p className="font-poppins text-otisBlue p-4">{renew.renewal}</p>
                        <Link href={renew.link}>
                            <Button>
                            <FaPassport className="mx-2 h-6 w-6 text-blue-500"/>
                                Renew Passport
                            </Button>
                        </Link>
                        <p className="font-poppins text-otisBlue p-4">{renew.fee}</p>
                        <p className="font-poppins text-otisBlue font-semibold p-4">{renew.faq}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Passports