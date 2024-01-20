"use client"
import React from 'react'
import { community_room_details, countries, endTime, meeting_room_details, meeting_rooms, startTime, study_room_a_details, study_room_b_details } from '@/constants'
import { communityroom, meetingroom2, studyrooma1, studyroomb2 } from '@/assets'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MdPolicy } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select" 
import { Separator } from '@/components/ui/separator'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import { Check, ChevronsUpDown } from "lucide-react"

const formSchema = z.object({
    organizationName: z.string().min(1, {
        message: "Please enter a valid organization name.",
    }),
    zip: z.string().min(1, {
        message: "Required",
    }),
    orgContactName: z.string().min(1, {
        message: "Required",
      }),
      phone: z.string().min(1, {
        message: "Required",
    }),
    eventContactName: z.string().min(1, {
        message: "Required",
    }),
    orgContactNumber: z.string().min(1, {
        message: "Required",
    }),
    address: z.string().min(1, {
        message: "Required",
      }),
    unit: z.string().optional(),
    city: z.string().min(1, {
        message: "Required",
      }),
    state: z.string().min(2, {
        message: "Required",
    }),
    email: z
    .string({
      required_error: "Required",
    })
    .email(),
    type: z.enum(["yes", "no"], {
        required_error: "Please select Yes or No.",
    }),
    country: z
    .string({
      required_error: "Please select a country from the list.",
    }),
    requestedRoom: z.enum(["community", "meeting"], {
        required_error: "Please select either the Community Room or the Meeting Room.",
    }),
    equipment: z.string().optional(),
    dateRequested: z.date({
        required_error: "Required",
      }),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    applicant: z.string().min(1, {
        message: "Required",
      }),  
})
const MeetingRooms = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            organizationName: "",
            email: "",
            phone: "",
            unit: "",
            city: "",
            state: ""
          },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
      toast({
        title: "Your request has been submitted successfully!",
        description: "A staff member will email you with your reservation details once your request has been processed.",
      })
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      const { toast } = useToast()
      const requestedRoom = form.watch("requestedRoom")
  return (
    <div>
         <div className="flex flex-col justify-center items-center m-auto p-24 max-w-[80%] scroll-smooth">
         <h1 className="text-7xl font-oswald text-otisBlue">Find Your Focus.</h1>
         <p className="text-lg text-otisBlue p-5">Unlocking Otis Library&apos; Meeting and Study Room Havens</p>
            
            <div className="flex flex-col justify-center items-center">
                    {meeting_rooms.map ((rooms) => (
                        <div className="relative p-8" key={rooms.id}>
                            <h1 className="font-poppins p-4 text-otisBlue">{rooms.heading}</h1>
                            <p className="font-poppins p-4 text-otisBlue">{rooms.description}</p>
                            <div className="absolute bottom-0 right-8">
                            <Link href="#form">
                                <Button variant="link">
                                <CiBookmarkCheck className="h-6 w-6 mr-2 text-blue-500" />
                                Reserve Your Room
                                 </Button>
                                 </Link>
                            <Link href="/Policy+for+Use+of+Rooms.pdf">
                                <Button>
                                <MdPolicy className="h-6 w-6 mr-2 text-blue-500" />
                                Room Use Policy
                                 </Button>
                                 </Link>
                                 </div>
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-3 p-24 gap-4 w-full m-auto">
            <div className="flex flex-row">
            <h1 className="flex flex-row items-center justify-center p-2 mx-5 font-oswald text-[100px] text-otisBlue">4
            <p className="font-poppins uppercase text-2xl p-2 text-blue-500">Rooms Available</p>
            </h1>
            </div>
            <div className="flex flex-row">
            <h1 className="flex flex-row items-center justify-center p-2 mx-5 font-oswald text-[100px] text-otisBlue">128
            <p className="font-poppins uppercase text-2xl p-2 text-blue-500">Max Capacity</p>
            </h1>
            </div>
            <div className="flex flex-row">
            <h1 className="flex flex-row items-center justify-center p-2 mx-5 font-oswald text-[100px] text-otisBlue">2
            <p className="font-poppins uppercase text-2xl p-2 text-blue-500">Large Format Meeting Rooms</p>
            </h1>
            </div>
     
            </div>
            <div className="grid grid-cols-2 gap-4">
    <Card className="shadow-md">
  <CardHeader>
    {community_room_details.map((comm) => (
        <div key={comm.id}>
    <CardTitle className="font-oswald text-otisBlue text-3xl">{comm.title}</CardTitle>
    <CardDescription className="p-2">{comm.description}</CardDescription>
    </div>
    ))}
  </CardHeader>
  <CardContent>
  <Image className="rounded-xl m-auto" src={communityroom} alt="community room"/>
  </CardContent>
  <CardFooter>
  {community_room_details.map((comm) => (
    <div className="flex flex-row items-center justify-center m-auto" key={comm.id}>
        {comm.items.map((items) => (
            <div className="flex flex-row p-2 font-poppins text-otisBlue" key={items.id}>
                 <h1 className="mx-2">{items.title}</h1>
                <Badge>{items.value}</Badge>
            </div>
         ))}
    </div>
    ))}
  </CardFooter>
</Card>
<Card className="shadow-md">
  <CardHeader>
    {meeting_room_details.map((comm) => (
        <div key={comm.id}>
    <CardTitle className="font-oswald text-otisBlue text-3xl">{comm.title}</CardTitle>
    <CardDescription className="p-2">{comm.description}</CardDescription>
    </div>
    ))}
  </CardHeader>
  <CardContent className="">
  {/* <Image className="rounded-xl m-auto" src={meetingroom1} alt="meetingroom1"/> */}
  <Image className="rounded-xl m-auto" src={meetingroom2} alt="meetingroom1"/>
  </CardContent>
  <CardFooter>
  {meeting_room_details.map((comm) => (
    <div className="flex flex-row items-center justify-center m-auto" key={comm.id}>
        {comm.items.map((items) => (
            <div className="flex flex-row p-2 font-poppins text-otisBlue" key={items.id}>
                 <h1 className="mx-2">{items.title}</h1>
                <Badge>{items.value}</Badge>
            </div>
         ))}
    </div>
    ))}
  </CardFooter>
</Card>
<Card className="shadow-md">
  <CardHeader>
    {study_room_a_details.map((comm) => (
        <div key={comm.id}>
    <CardTitle className="font-oswald text-otisBlue text-3xl">{comm.title}</CardTitle>
    <CardDescription className="p-2">{comm.description}</CardDescription>
    </div>
    ))}
  </CardHeader>
  <CardContent className="">
  
  <Image className="rounded-xl m-auto" src={studyrooma1} alt="meetingroom1"/>
  </CardContent>
  <CardFooter>
  {study_room_a_details.map((comm) => (
    <div className="flex flex-row items-center justify-center m-auto" key={comm.id}>
        {comm.items.map((items) => (
            <div className="flex flex-row p-2 font-poppins text-otisBlue" key={items.id}>
                 <h1 className="mx-2">{items.title}</h1>
                <Badge>{items.value}</Badge>
            </div>
         ))}
    </div>
    ))}
  </CardFooter>
</Card>
<Card className="shadow-md">
  <CardHeader>
    {study_room_b_details.map((comm) => (
        <div key={comm.id}>
    <CardTitle className="font-oswald text-otisBlue text-3xl">{comm.title}</CardTitle>
    <CardDescription className="p-2">{comm.description}</CardDescription>
    </div>
    ))}
  </CardHeader>
  <CardContent className="">
  
  <Image className="rounded-xl m-auto" src={studyroomb2} alt="meetingroom1"/>
  </CardContent>
  <CardFooter>
  {study_room_b_details.map((comm) => (
    <div className="flex flex-row items-center justify-center m-auto" key={comm.id}>
        {comm.items.map((items) => (
            <div className="flex flex-row p-2 font-poppins text-otisBlue" key={items.id}>
                 <h1 className="mx-2">{items.title}</h1>
                <Badge>{items.value}</Badge>
            </div>
         ))}
    </div>
    ))}
  </CardFooter>
</Card>
            </div>
        </div>
        <section id="form" className="pb-24">
        <div className="flex flex-col items-center justify-center max-w-[80%] p-10 m-auto ">
                <div className="bg-primary text-secondary  w-full p-10 rounded-xl flex flex-col items-center justify-center">
                <h1 className="text-5xl font-oswald text-blue-500 pb-2">Reserve your room today!</h1>
                <p className="text-lg font-poppins pb-10">But first, let&apos;s get from info from you.</p>
                <h1 className="font-oswald text-3xl text-blue-500 ">Organization Details</h1>
                <p className="pb-10">Fill out the following details to collect information on behalf of the organization hosting this event.</p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <Form {...form}>
      
        <div className="flex flex-row justify-center items-start gap-5">
      <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Organization Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="Otis Library" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="orgContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="Cathleen Special" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                        <FormField
          control={form.control}
          name="orgContactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Phone Number:</FormLabel>
              <FormControl>
              <Input className="text-blue-500" placeholder="(860) 889-2635" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center justify-center">
              <FormLabel>Is this a nonprofit organization?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row items-center text-blue-500"
                >
                  <FormItem className="flex flex-row items-center p-4 space-x-4 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary items-center " value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center flex-row p-4 space-x-8 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary" value="no" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      No
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      {/*   <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-primary">
                    <SelectValue className="text-primary" placeholder="Select a country..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-blue-500">
                    {countries.map ((data) => (
                        <div className="text-primary" key={data.country}>
                  <SelectItem className="text-blue-500 stroke-primary" value={data.country}>{data.country}</SelectItem>

                  </div>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
                    <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full pb-10">
              <FormLabel>Country</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="text-primary"
                    >
                      {field.value
                        ? countries.find(
                            (country) => country.country === field.value
                          )?.country
                        : "Select a country..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 h-[400px] w-full overflow-y-auto">
                  <Command>
                    <CommandInput placeholder="Search countries..." />
                    <CommandEmpty>No countries found.</CommandEmpty>
                    <CommandGroup>
                      {countries.map((countries) => (
                        <CommandItem
                          value={countries.country}
                          key={countries.country}
                          onSelect={() => {
                            form.setValue("country", countries.country)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              countries.country === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {countries.country}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="261 Main Street" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                  <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apartment/Unit Number:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-5">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="Norwich" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                          <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="CT" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                          <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code:</FormLabel>
              <FormControl>
                <Input className="text-blue-500"placeholder="06360" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Separator/>
        <div className="flex flex-col justify-center items-center">
        <h1 className="font-oswald text-3xl text-center text-blue-500">Event Details</h1>
        <p className="pb-10 text-center">Fill out the following details to collect information about the event coordinator (on-site during event).</p>
        </div>
            <div className="flex flex-row justify-center items-center gap-5">
                <FormField
          control={form.control}
          name="eventContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Contact Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="(860) 889-2365" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="web@otislibrarynorwich.org" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="requestedRoom"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center justify-center">
              <FormLabel>Room Requested:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row items-center text-blue-500"
                >
                  <FormItem className="flex flex-row items-center p-4 space-x-4 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary items-center " value="community" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Community Room
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center flex-row p-4 space-x-8 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary" value="meeting" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Meeting Room
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {requestedRoom === "community" && (
                    <FormField
                    control={form.control}
                    name="equipment"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center justify-center">
                        <FormLabel>Do you Need to use our equipment? (DVD player/projector/screen)</FormLabel>
                        <p className="text-xs">The group using the room is responsible for equipment damage or loss.</p>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row items-center text-blue-500"
                          >
                            <FormItem className="flex flex-row items-center p-4 space-x-4 space-y-0">
                              <FormControl>
                                <RadioGroupItem className="bg-secondary items-center " value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal text-secondary ">
                                Yes
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center flex-row p-4 space-x-8 space-y-0">
                              <FormControl>
                                <RadioGroupItem className="bg-secondary" value="no" />
                              </FormControl>
                              <FormLabel className="font-normal text-secondary ">
                                No
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />      
        )}
        <div className="flex flex-row justify-center items-center">
        <FormField
          control={form.control}
          name="dateRequested"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Requested Date:</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"secondary"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date <= new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        /> 
    </div>
    <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Start Time:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-primary">
                    <SelectValue className="text-primary" placeholder="Select a start time..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-primary">
                    {startTime.map ((data) => (
                        <div className="text-primary" key={data.time}>
                  <SelectItem className="text-primary stroke-primary" value={data.time}>{data.time}</SelectItem>

                  </div>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event End Time:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-primary">
                    <SelectValue className="text-primary" placeholder="Select an end time..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-primary">
                    {endTime.map ((data) => (
                        <div className="text-primary" key={data.time}>
                  <SelectItem className="text-primary stroke-primary" value={data.time}>{data.time}</SelectItem>

                  </div>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applicant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                The applicant hereby states that he/she is empowered to act for the group requesting use of Otis Library’s meeting rooms and agrees to faithfully abide by all Otis Library regulations as outlined in the Policy for Use of Meeting Rooms.
            </FormLabel>
              <FormControl>
                <Input className="text-blue-500"placeholder="Applicant Name and Date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-center items-center p-4">
        <p className="text-sm font-semibold">Please note: This reservation is not final until you receive a confirmation email from Otis Library.</p>
        <p className="text-sm font-semibold">Any questions please contact Mary Ellen Christina (860) 889-2365 ext 124.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <Button variant="secondary" type="submit">
        <CiBookmarkCheck className="h-6 w-6 mr-2 text-blue-500" />
            Reserve Room
            </Button>
            </div>
    </Form>
    </form>
    </div>
            </div>
            </section>
    </div>
  )
}

export default MeetingRooms