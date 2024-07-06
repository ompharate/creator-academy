import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 
const page = ({params}: {params:string}) => {
  return <div className="max-w-7xl mx-auto flex justify-center mt-5">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Course</TabsTrigger>
        <TabsTrigger value="password">Enrollment History</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Full stack python development</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Course Name</Label>
              <Input id="name"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Course Price</Label>
              <Input id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Course Description</Label>
              <textarea className="w-full border border-gray-300 rounded-md p-2" rows={4} id="username" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Users Bought this course</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h2>@ompharate</h2>
            <h2>@ompharate</h2>
            <h2>@ompharate</h2>
            <h2>@ompharate</h2>
          </CardContent>         
        </Card>
      </TabsContent>
    </Tabs>
  </div>;
};

export default page;
