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

export default function page() {
  return (
    <Tabs defaultValue="account" className="max-w-7xl mx-auto mt-5  ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">New Course</TabsTrigger>
        <TabsTrigger value="password">Add Lecture</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Create your course</CardTitle>
            <CardDescription>
              once created, you can add lectures to your course
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Course Name</Label>
              <Input id="name"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Course Price</Label>
              <Input id="name"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Description</Label>
              <textarea rows={8} className="w-full rounded border border-slate-300 px-4 py-2" id="username"  />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#2795cc]">Create</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Add lecture</CardTitle>
            <CardDescription>
              Once added, you can share your lecture with your students
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Topic Name</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Pic</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#2795cc]">Upload</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
