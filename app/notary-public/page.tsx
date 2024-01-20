import React from 'react'
import { notarypublic } from '@/assets'
import Image from 'next/image'
import { notary_misc, notary_documents, notary_questions } from '@/constants'

const NotaryPublic = () => {
  return (
    <div>
 <div className="flex flex-col items-center justify-center m-auto p-24">
        <h1 className="text-7xl font-oswald text-otisBlue text-center">Need Documents Verified?</h1>
        <p className="text-lg text-otisBlue p-5 text-center">Find Notary Services at Otis Library!</p>
        <p className="font-poppins text-otisBlue text-lg p-5">Otis Library provides limited Notary Services as a courtesy to patrons. There is no fee for simple, non-commercial notarial actions.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
        <Image className="flex flex-col" width={700} height={700} src={notarypublic} alt="Notary"/>
        <div className="flex flex-col items-center justify-center">
        {notary_misc.map ((misc) => (
          <div key={misc.id}>
            <h1 className="text-3xl font-oswald text-otisBlue p-4">{misc.title}</h1>
            {misc.items.map((items) =>(
              <div key={items.id}>
                <p className="font-poppins text-lg text-otisBlue p-4 leading-6">{items.content}</p>
              </div>
            ))}
          </div>
        ))}
        </div>
       
        </div>
        {notary_documents.map((notary) =>(
          <div key={notary.id}>
            {notary.sections.map((sections) =>(
              <div key={sections.id}>
            <h1 className="text-3xl font-oswald text-otisBlue p-4">{sections.title}</h1>
            {sections.items.map((items) => (
              <div key={items.id}>
                <h1 className="text-2xl font-oswald text-otisBlue px-4">{items.title}</h1>
                <p className="font-poppins text-lg text-otisBlue p-4 leading-6">{items.content}</p>
              </div>
            ))}
              </div>
            ))}
          </div>
        ))}
        <div className="p-10">
        {notary_questions.map((questions) => (
          <div key={questions.id}>
            <p className="p-2 font-poppins text-lg text-otisBlue text-center m-auto">{questions.content}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default NotaryPublic