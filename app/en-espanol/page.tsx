'use client'
import Image from 'next/image';
import { espanol, esp_collection, esp_immigration, esp_services, esp_english, esp_health, esp_legal, esp_consumer, esp_gov_services, esp_gov_benefits, esp_jobs, esp_housing, esp_education, esp_tech } from '../../constants'
import styles from '../../styles'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MdMiscellaneousServices } from "react-icons/md";


const Espanol = () => {
  
  const onButtonClick = () => {
    const pdfUrl = "http://localhost:3000/brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "brochure.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };
    
  return (
    <div>
<div>
    <div className="flex flex-col justify-center items-center m-auto p-24 relative max-w-[80%]">
      <h1 className="text-7xl font-oswald text-otisBlue leading-[100px]">¡Bienvenidos a Otis Library! </h1>
    <p className="text-lg text-otisBlue p-5">Un mundo de recursos en español te espera.</p>
      <p className="text-lg text-otisBlue p-5">¿Hablas español? ¡Estamos encantados de darte la bienvenida a Otis Library! Queremos que sepas que eres parte de una comunidad vibrante y que tenemos una gran cantidad de recursos en español para ti.</p>
      <div className="absolute bottom-0 right-32">
      <Link href="/brochure.pdf">
        <Button>
        <MdMiscellaneousServices className="h-6 w-6 mr-2 text-blue-500" />
        Servicios de la Biblioteca
         </Button>
         </Link>
      </div>
      </div>
      <div className="max-w-[80%] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2 lg:p-10 justify-items-start">
        {esp_consumer.map ((items) => (
          <div className="group flex" key={items.id}>
          <Card className="">
<CardHeader className="">
<CardTitle className="flex font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
<CardDescription className="flex flex-col h-full w-full justify-start">
    <Image alt={items.title} className="w-full h-full rounded-xl object-contain" src={items.img}/>
    </CardDescription>
</CardHeader>
<CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
{esp_education.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
        {esp_english.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
                {esp_gov_benefits.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
                        {esp_gov_services.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
                                  {esp_immigration.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
          {esp_health.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
                  {esp_housing.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
         {esp_jobs.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
                 {esp_legal.map ((items) => (
          <div className="group flex" key={items.id}>
              <Card className="h-full">
  <CardHeader className="flex justify-center flex-col">
    <CardTitle className="flex justify-center font-oswald text-otisBlue text-2xl group-hover:text-blue-500 transition-all duration-700 ease-in-out">{items.title}</CardTitle>
    <CardDescription>
        <Image alt={items.title} className="w-full h-full m-auto rounded-xl object-contain " src={items.img}/>
        </CardDescription>
  </CardHeader>
  <CardContent>
  {items.links.map ((links) => (
        <div key={links.id}>
            <Link className="hover:text-blue-500 transition-all duration-700 ease-in-out" href={links.link}>{links.link}</Link>
        </div>
    ))}
  </CardContent>
</Card>
        </div>
        ))}
        </div>
            </div>
            </div>
            </div>
  )
}

export default Espanol