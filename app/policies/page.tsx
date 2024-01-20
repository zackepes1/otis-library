import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { additional_policy, fee_policy, loan_policy } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Policy = () => {
  return (
    <div>
              <div className="flex flex-col justify-center items-center m-auto p-24">
              <h1 className="text-7xl font-oswald text-otisBlue pb-4">Understanding Otis Library&apos;s Policies </h1>
              <p className="text-lg text-otisBlue p-4">At Otis Library, we aim to make your literary journey smooth and satisfying. From borrowing your next adventure to navigating our spaces, here&apos;s a guide to our policies, ensuring you have a clear understanding of our rules and responsibilities.</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {loan_policy.map((policy) =>(
            <div key={policy.id}>
             <div className="text-2xl text-center  p-4 text-otisBlue font-oswald">{policy.title}</div>
       
           
                         <Table className="flex flex-col justify-center items-center">
                    <TableBody>
                        {policy.contents.map((content) => (
                        <TableRow key={content.id}>
                        <TableCell className="font-medium  text-start justify-start text-otisBlue">{content.label}</TableCell>
                        <TableCell className="font-medium  text-end justify-end text-otisBlue">{content.content}</TableCell>
                        </TableRow>
                        ))} 
                    </TableBody>
                    </Table>
                    </div>
        ))}
         {fee_policy.map((policy) =>(
                 <div key={policy.id}>
                 <div className="text-2xl text-center  p-4 text-otisBlue font-oswald">{policy.title}</div>
           
               
                             <Table className="flex flex-col justify-center items-center">
                        <TableBody>
                            {policy.contents.map((content) => (
                            <TableRow key={content.id}>
                            <TableCell className="font-medium  text-start justify-start text-otisBlue">{content.label}</TableCell>
                            <TableCell className="font-medium  text-end justify-end text-otisBlue">{content.content}</TableCell>
                            </TableRow>
                            ))} 
                        </TableBody>
                        </Table>
                        </div>
        ))}
         {additional_policy.map((policy) =>(
            <div key={policy.id}>
  <div className="text-2xl text-center font-oswald p-4 text-otisBlue">{policy.title}</div>

                {policy.contents.map((contents) => (
                    <div key={contents.id}>
                        <div className="font-poppins text-lg  text-otisBlue">
                            <div className="w-full h-full">
                                <Link href={contents.link}>
                                <div className="text-base text-center my-1 hover:text-blue-500 transition-all duration-700 ease-in-out">{contents.content}</div>
                                </Link>
                            </div>

                    </div>
                    </div>
                ))}
                </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Policy