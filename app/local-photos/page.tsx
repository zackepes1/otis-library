import React from 'react'
import { flickrcontent } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LocalPhotos = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto p-5 lg:p-24">
   {flickrcontent.map((flickr) => (
    <div className="flex flex-col justify-center items-center" key={flickr.id}>
            <h1 className="text-5xl lg:text-7xl font-oswald text-otisBlue">{flickr.title}</h1>
            <div className="flex flex-col max-w-[80%] m-auto justify-center items-center">
            <p className="text-lg text-otisBlue p-5">{flickr.subtitle}</p>
        <p className="text-base text-otisBlue p-5">{flickr.content}</p>
        <Link href="https://www.flickr.com/photos/otis_library_collections/">
                    <Button className="w-full">
                    Flickr Photos
                    </Button>
                </Link>
        <h1 className="text-5xl font-oswald p-10 text-otisBlue">Flickr Videos</h1>
    <div className="grid grid-cols-4 gap-5 place-content-evenly place-items-center h-full w-full">
        {flickr.links.map((links) =>(
            <div className="w-full" key={links.id}>
                <Link href={links.link}>
                    <Button className="w-full">
                    {links.title}
                    </Button>
                </Link>
            </div>
        ))}
    </div>
    </div>
    </div>
   ))}
    </div>
  )
}

export default LocalPhotos