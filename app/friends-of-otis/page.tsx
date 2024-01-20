import { friends } from '@/assets';
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosDocument } from "react-icons/io";


const Friends = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-auto p-24">
        <div className="flex flex-row justify-center items-center">
      <Image width={120} height={120} src={friends} alt="friends"/>
    <h1 className="text-7xl font-oswald text-otisBlue pb-4">
        Meet the Friends of Otis Library!
        </h1>
        </div>
    <p className="text-lg text-otisBlue p-4">Otis Library thrives because of the amazing community surrounding it, and at the heart of this support network lies the Friends of Otis Library! These dedicated volunteers are passionate about books, learning, and enriching the lives of everyone in our community.</p>
    <div className="grid grid-cols-3 gap-4 justify-content-evenly w-full p-4">
        <h1 className="p-4 text-2xl font-oswald text-otisBlue">
            Who are the Friends?
            <p className="text-base font-poppins p-4 leading-8">They&apos;re not just bookworms, although you&apos;ll certainly find plenty of those! The Friends of Otis Library come from all walks of life, united by a love for reading and a desire to make the library a vibrant hub for everyone. You might find teachers, artists, retirees, entrepreneurs, and students – all with a shared passion for making a difference.</p>
        </h1>
        <h1 className="p-4 text-2xl font-oswald text-otisBlue">
            What do they do?
            <p className="text-base font-poppins p-4">The Friends wear many hats (some literal, at our annual book sales!).</p>
            <ul>
                <li className="text-xl font-oswald p-2">Raise funds</li>
                <li className="text-sm font-poppins p-2">Through events like book sales, author talks, and community partnerships, the Friends generate valuable resources that support library programs, collections, and technology.</li>
                <li className="text-xl font-oswald p-2">Volunteer their time</li>
                <li className="text-sm font-poppins p-2"> From helping at events to shelving books and assisting patrons, the Friends are the backbone of many library initiatives.</li>
                <li className="text-xl font-oswald p-2">Advocate for the library</li>
                <li className="text-sm font-poppins p-2"> They champion the library&apos;s mission and vision, ensuring its importance remains recognized and valued within the community.</li>
                <li className="text-xl font-oswald p-2">Spread the love of reading</li>
                <li className="text-sm font-poppins p-2"> Whether hosting storytimes for children, recommending books to patrons, or organizing book clubs, the Friends encourage a lifelong love of learning and literature.</li>
            </ul>
        </h1>
        <h1 className="p-4 text-2xl font-oswald text-otisBlue">How can you join the fun?
        <p className="text-base font-poppins p-4 leading-8">We are always looking to make new Friends!  If you would like to become a member, please view the membership brochure below. Meetings are held on the third Wednesday of the month at 5:00 PM in the meeting room on the second floor of the Library. Please contact the Library for schedule changes. </p>
        <div className="flex flex-col items-center justify-center">
            <Link href="/friendsbrochure.pdf">
        <Button className="ml-2">
        <IoIosDocument className="h-6 w-6 mr-2 text-blue-500" />
       Membership 
         </Button>
         </Link>
         </div>
        </h1>
    </div>
    </div>
    </div>
  )
}

export default Friends