import Link from "next/link"
import { capi } from "../../constants"
import styles,{layout} from "../../styles"
import { Button } from "@/components/ui/button"
import { FaBookOpen } from "react-icons/fa6"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const CallAhead = () => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center m-auto p-4 lg:p-24 relative max-w-[80%]">
      <h1 className="text-7xl font-oswald text-otisBlue leading-[100px]">Skip the Lines, Grab the Goods.</h1>
    <p className="text-lg text-otisBlue p-5">Your guide to Call Ahead Pickup at Otis Library!</p>
      <p className="text-lg text-otisBlue p-5">Tired of waiting in line? Want to snag your library holds with lightning speed? Look no further than Otis Library&apos;s Call Ahead Pickup service! Skip the browsing and dive straight into your literary adventures with this convenient and time-saving option.</p>
      <div className="absolute bottom-0 right-32">
      <Link href="https://nw.catalog.lionlibraries.org/">
        <Button>
        <FaBookOpen className="h-4 w-4 mr-2 text-blue-500" />
        Catalog
         </Button>
         </Link>
      </div>
      </div>
      <div className="flex-col lg:flex-row flex justify-between lg:max-w-[80%] mx-auto items-start">
        <div className="lg:max-w-[40%] lg:p-24 ">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="">Call Ahead Pickup Hours</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Monday</TableCell>
      <TableCell>9:00 AM - 6:30 PM</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Tuesday</TableCell>
      <TableCell>9:00 AM - 4:30 PM</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Wednesday</TableCell>
      <TableCell>9:00 AM - 6:30 PM</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Thursday</TableCell>
      <TableCell>9:00 AM - 1:30 PM</TableCell>
    </TableRow> 
    <TableRow>
      <TableCell className="font-medium">Friday</TableCell>
      <TableCell>9:00 AM - 4:30 PM</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Saturday</TableCell>
      <TableCell>9:00 AM - 1:30 PM</TableCell>
    </TableRow> 
  </TableBody>
</Table>
</div>
<div className="lg:max-w-[40%] flex flex-row p-24 m-auto">
            {capi.map((call) => (
          <div className="mb-4" key={call.id}>
            {call.sections.map((sections) => (
                <div key={sections.id}>
                <div className="flex flex-col p-4 text-2xl font-oswald text-otisBlue justify-start items-start" >
                    {sections.title}
                </div>
                <div className="flex flex-col gap-10 p-4 text-base font-poppins text-otisBlue justify-start items-start max-w-[600px]">
                 {sections.content.map ((contents) => (
                    <div key={contents.id}>
                        {contents.contents}
                    </div>
                 ))}
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

export default CallAhead