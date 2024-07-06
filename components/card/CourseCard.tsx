"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function CourseCard() {
    const router = useRouter();
  return (
    <Card className="max-w-4xl mx-auto mt-2">
      <CardHeader>
        <CardTitle>Full stack python developer</CardTitle>
        <CardDescription>you can configure you course </CardDescription>
      </CardHeader>
      <CardContent>
        <img width={300} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr3sO-Qc1MBDW4muEmRbepQ2YxXetc0rCNA&s"/>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button onClick={()=>router.push('/dashboard/courses/1234')} className="bg-[#2795cc]">Configure</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}
