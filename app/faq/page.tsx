"use client"
import {useState} from 'react';
import { faqs } from '../../constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

const faq = () => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center m-auto p-24">
      <h1 className="text-7xl font-oswald text-otisBlue">Got Questions? We&apos;ve Got Answers!</h1>
      <p className="text-lg text-otisBlue p-5">Explore our comprehensive knowledge base to resolve any doubts.</p>
      </div>
      <div>
            {faqs.map((question) => (
          <div className="mb-4 max-w-[80%] m-auto" key={question.id}>
              <Accordion type="single" collapsible className="w-full">
                    <AccordionItem className="text-otisBlue" value="item-1">
                      <AccordionTrigger className="font-oswald text-xl">{question.question}</AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {question.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
          </div>
            ))}
            </div>
              <h1 className="text-center text-lg  text-otisBlue pt-24">If you have any questions that were not answered here, please call our main number at 860-889-2365.</h1>
              <h1 className="text-center text-lg text-otisBlue pb-24">If you are looking for a specific department, you may check our <Link className="text-blue-500" href="/contact-us">Contact Us</Link> page for more information.</h1>
            </div>
  )
}

export default faq