'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { dislikes, format, genres_desc, liked_topics  } from '@/constants';
import { Textarea } from "@/components/ui/textarea"
import { IoCheckmarkCircleSharp } from "react-icons/io5";


const formSchema = z.object({
  
  genres: z.array(z.string().optional()),

  firstName: z.string().min(1, {
      message: "Required",
  }),
  lastName: z.string().min(1, {
    message: "Required",
}),
  phoneNumber: z.string().min(1, {
      message: "Required",
  }),
  libraryCard: z.string().min(1, {
    message: "Required",
}),
  email: z.string({
    required_error: "Required",
  })
  .email(),
  audiencePreferred: z.enum(["adult", "child", "teen"],).optional(),
  age: z.string().optional(), 
  likes: z.string().optional(),
  dislikes: z.string().optional(),
  likedTopics: z.array(z.string().optional()),   
  dislikedTopics: z.array(z.string().optional()),
  other: z.string().optional(),
  preferredFormat: z.array(z.string().optional()),
  bestSelections: z.string().optional()
})

const ReadNext = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        genres: [""],
        likedTopics: [""],
        dislikedTopics: [""],
        preferredFormat: [""],
        bestSelections: ""
      },
})
const { toast } = useToast()
function onSubmit(values: z.infer<typeof formSchema>) {
  toast({
    title: "Your request has been submitted successfully!",
    description: "A staff member will contact you with your once your feedback has been processed with recommendations.",
  })
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const audiencePreferred = form.watch("audiencePreferred")
  const dislikedTopics = form.watch("dislikedTopics")
  return (
<div className="flex flex-col justify-center items-center m-auto p-5 lg:p-24">
    <h1 className="text-5xl lg:text-7xl font-oswald text-otisBlue">Unlock Your Next Book Adventure.</h1>
    <p className="text-lg text-otisBlue p-5">Our Reader&apos;s Advisory Form!</p>
    <p className="text-base text-otisBlue p-5">Stuck in a reading rut? Eager to discover your next literary obsession? Fill out our Reader&apos;s Advisory form and let our dedicated book matchmakers guide you to thrilling new pages!</p>
    <p className="text-base text-otisBlue p-5">Fill out the form below with what you love (and dislike) to read. Complete as much or as little as you’d like – keep in mind that the more you tell us, the better we can help you. Our readers advisory staff will respond within 5 business days with 3-5 books selected especially for you.</p>
    <section id="form" className="pb-24">
        <div className="flex flex-col items-center justify-center p-10 m-auto w-screen max-w-[80%]">
                <div className="bg-primary text-secondary  w-full p-10 rounded-xl flex flex-col items-center justify-center">
                <h1 className="text-5xl font-oswald text-blue-500 pb-2">Let&apos;s find you a book!</h1>
                <p className="text-lg font-poppins pb-10">But first, let&apos;s get from info from you.</p>
                
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex flex-row justify-center items-start gap-5">
      <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>First Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="Zack" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="Epes" {...field} />
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
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number:</FormLabel>
              <FormControl>
              <Input className="text-blue-500" placeholder="(860) 889-2635" {...field} />
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
          name="libraryCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Library Card Number:</FormLabel>
              <FormControl>
                <Input className="text-blue-500" placeholder="#######" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="audiencePreferred"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center justify-center">
              <FormLabel>Audience Preferred:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row items-center text-blue-500"
                >
                  <FormItem className="flex flex-row items-center p-4 space-x-4 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary items-center " value="adult" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Adult
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex flex-row items-center p-4 space-x-4 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary items-center " value="teen" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Teen
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center flex-row p-4 space-x-8 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="bg-secondary" value="child" />
                    </FormControl>
                    <FormLabel className="font-normal text-secondary ">
                      Child
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          {audiencePreferred === "child" && (
                     <FormField
                     control={form.control}
                     name="age"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>
                           What age child?
                       </FormLabel>
                         <FormControl>
                           <Input className="text-blue-500"placeholder="" {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
        )}
          <div className="flex flex-row justify-center items-center pt-3">
            <FormLabel>
               Genres of interest:
            </FormLabel>
            </div>
        <div className="grid grid-cols-3 gap-4 place-content-center">
       
           {genres_desc.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="genres"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"> 
                        <FormControl>
                          <Checkbox
                          className="bg-secondary stroke-primary"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
              </div>
              <FormField
                     control={form.control}
                     name="likes"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>
                           List 2-5 books or authors you like and why:
                       </FormLabel>
                         <FormControl>
                           <Textarea className="text-blue-500"placeholder="Type your message here." {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                                        <FormField
                     control={form.control}
                     name="dislikes"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>
                           List at least 2 books or authors you dislike and why:
                       </FormLabel>
                         <FormControl>
                           <Textarea className="text-blue-500"placeholder="Type your message here." {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                      <div className="flex flex-row justify-center items-center pt-3">
            <FormLabel>
               Things you like to read about:
            </FormLabel>
            </div>
        <div className="grid grid-cols-3 gap-4 place-content-center">
       
           {liked_topics.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="likedTopics"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"> 
                        <FormControl>
                          <Checkbox
                          className="bg-secondary stroke-primary"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
              </div>
              <div className="flex flex-row justify-center items-center pt-3">
            <FormLabel>
               Things you dislike:
            </FormLabel>
            </div>
        <div className="grid grid-cols-3 gap-4 place-content-center">
       
           {dislikes.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="dislikedTopics"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"> 
                        <FormControl>
                          <Checkbox
                          className="bg-secondary stroke-primary"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
              </div>
              {dislikedTopics?.includes("other") && (
              <FormField
                     control={form.control}
                     name="other"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>
                           Please list other things you dislike here:
                       </FormLabel>
                         <FormControl>
                           <Textarea className="text-blue-500"placeholder="Type your message here." {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
              )}
      <div className="flex flex-row justify-center items-center pt-3">
            <FormLabel>
               Preferred Format:
            </FormLabel>
            </div>
        <div className="grid grid-cols-3 gap-4 place-content-center">
       
           {format.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="preferredFormat"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"> 
                        <FormControl>
                          <Checkbox
                          className="bg-secondary stroke-primary"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
              </div>
              <FormField
                     control={form.control}
                     name="bestSelections"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>
                           Anything else that we should know to help us find the best selections for you:
                       </FormLabel>
                         <FormControl>
                           <Textarea className="text-blue-500"placeholder="Type your message here." {...field} />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
        <div className="flex flex-col justify-center items-center">
        <Button variant="secondary" type="submit">
        <IoCheckmarkCircleSharp className="h-6 w-6 mr-2 text-blue-500" />
            Submit
            </Button>
            </div>
            </form>
    </Form>
    </div>
            </div>
            </section>
    </div>
  )
}

export default ReadNext