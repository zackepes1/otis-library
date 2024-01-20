import { FaCarSide } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { otislinedrawing } from "@/assets";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";




import Image from "next/image";
import { home_delivery, home_delivery_benefits } from "@/constants";


const HomeDelivery = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center m-auto p-24">
            <h1 className="text-7xl font-oswald text-otisBlue">Your Books, Delivered.</h1>
            <p className="text-lg text-otisBlue p-5">Exploring Otis Library&apos;s Home Delivery Service</p>
    
            <p className="text-lg text-otisBlue p-4">Can&apos;t make it to the library but still hungry for a literary feast? Otis Library&apos;s Home Delivery service brings the library directly to you, delivering books, audiobooks, and more right to your doorstep! Whether you&apos;re homebound, have limited mobility, or simply prefer the convenience, this service opens the world of reading to everyone.</p>
        <div className="flex flex-row w-full h-full items-center justify-between lg:max-w-[60%]">
        <IoLibrary className="text-[100px] text-otisBlue"/>
        <FaArrowAltCircleRight className="text-[50px] text-blue-500"/>
        <FaCarSide className="text-[100px] text-otisBlue"/>
        <FaArrowAltCircleRight className="text-[50px] text-blue-500"/>
        <FaHome className="text-[100px] text-otisBlue"/>
        </div>
        <div className="flex flex-row justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full m-auto justify-center">

            {home_delivery.map ((home) => (
                <div className="p-4" key={home.id}>
                    <h1 className="font-oswald text-otisBlue text-3xl p-4">{home.title}</h1>
                    {home.contents.map ((contents) => (
                    <div key={contents.id}>
                        <p className="text-otisBlue font-poppins text-base max-w-[400px] leading-8 p-4">{contents.content}</p>
                    </div>
                ))}
                </div>
  
            ))}
            {home_delivery_benefits.map((delivery) => (
                <div className="p-4" key={delivery.id}>
                    <h1 className="font-oswald text-otisBlue text-3xl p-4">{delivery.title}</h1>
                    {delivery.benefits.map((benefits) =>(
                        <div key={benefits.id}>
                            <ul>
                                <li className="font-oswald text-2xl text-otisBlue px-4">{benefits.label}</li>
                                <li className="text-otisBlue font-poppins text-base max-w-[400px] p-4">{benefits.content}</li>
                            </ul>
                            
                            
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

export default HomeDelivery