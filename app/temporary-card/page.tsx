"use client"
import { temp_card } from '@/constants'
import React from 'react'
import 'react-day-picker/dist/style.css';
import { countries} from '@/constants'
import { Button } from '@/components/ui/button';
import { CiBookmarkCheck } from "react-icons/ci";
import { useToast } from "@/components/ui/use-toast"
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
    firstname: z.string().min(1, {
        message: "Required",
    }),
    lastname: z.string().min(1, {
        message: "Required",
    }),
    zip: z.string().min(1, {
        message: "Required",
    }),
    phone: z.string().min(1, {
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
    country: z
    .string({
      required_error: "Please select a country from the list.",
    }),
    dateOfBirth: z.date({
        required_error: "Required",
      }),
})

const TempCard = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            unit: "",
            city: "",
            state: "",
            zip: "",
            country: "",
          },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        toast({
            title: "Your request has been submitted successfully!",
            description: "A staff member will contact you with your Otis Library card number once your request has been processed.",
          })
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      const { toast } = useToast()
return (
    <div className="pb-24">
        <div className="flex flex-col justify-center items-center m-auto pt-24">
    <h1 className="text-7xl font-oswald text-otisBlue">Unlock Your Library Adventure Today!</h1>
        <p className="text-lg text-otisBlue p-5">Apply for Your Temporary Library Card.</p>
        </div>
        <main className="flex-1 flex lg:flex-row flex-col text-secondary p-24 justify-center items-start">
    <div className="flex-1 flex flex-col">
    <div className="bg-primary text-secondary  w-full p-10 rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-5xl font-oswald text-blue-500 pb-2">Apply for your card today!</h1>
        <p className="text-lg font-poppins pb-10">But first, let&apos;s get from info from you.</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <Form {...form}>
        <div className="flex flex-row gap-5 col-span-2">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name:</FormLabel>
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
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="" {...field} />
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
        </div>
            <div className="flex flex-row justify-center items-center gap-5">
       
        </div>
        <div className="flex flex-row justify-center items-center">
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Birth:</FormLabel>
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
                    disabled={(date) =>
                        date > new Date() || date > new Date("2024-01-09")
                      }
                    captionLayout="dropdown-buttons"
                    fromYear={1910}
                    toYear={2024}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        /> 
    </div>
        <div className="flex flex-col justify-center items-center">
        <Button variant="secondary" type="submit">
        <CiBookmarkCheck className="h-6 w-6 mr-2 text-blue-500" />
            Apply
            </Button>
            </div>
    </Form>
    </form>
    </div>
    </div>
    <div className="flex-1 flex flex-col justify-start items-start">
    {temp_card.map ((temp) => (
            <div className="col-span-2 col-start-2" key={temp.id}>
                <h1 className="text-3xl font-oswald text-otisBlue p-4">{temp.title}</h1>
                <p className="text-lg font-poppins text-otisBlue p-4">{temp.content}</p>
            </div>
        ))}
    </div>
  </main>
    </div>
  )
}

export default TempCard