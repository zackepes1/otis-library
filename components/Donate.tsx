import {footnote} from "../assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { FaDonate } from "react-icons/fa"



const Donate = () => {
  return (

     <div className="flex flex-col justify-between p-10">
        <Image alt="Donate" className="object-contain" src={footnote}/>
        <h1 className="flex flex-row font-oswald text-6xl p-8 text-primary font-bold justify-center items-center gap-2">grow, <span className="text-otisBlue">discover,</span> <span className="text-blue-500"> & connect.</span>
            </h1>
            <div className="flex flex-col items-center justify-center">          
            <Button variant="secondary" className="h-1/2 w-1/2">
              <FaDonate className="mr-2 text-blue-500 h-6 w-6"/>
                <p>Donate</p>
            </Button>
      </div>
             </div>
  )
}


export default Donate