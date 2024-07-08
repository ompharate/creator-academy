"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newCourseValidation } from "@/lib/validations/course";
import { createCourse } from "@/lib/actions/course.actions";
import { useRouter } from "next/navigation";
import UploadButtonForm from "./UploadButtonForm";
const CreateCourseForm = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [courseName, setCourseName] = useState<string>("");
  const [coursePrice, setCoursePrice] = useState<string>("");
  const [courseDesc, setCourseDesc] = useState<string>("");

  const onSubmit = async () => {
    setLoading(true);
    const course = {
      courseName,
      coursePrice,
      creator: userId,
      description: courseDesc,
    };
    if (!course) return null;
    try {
      const validator = newCourseValidation.parse(course);
      await createCourse(course);
      router.push("/dashboard/courses");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
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
              <Label htmlFor="name">Course Thumbnail</Label>
              <UploadButtonForm />  
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Course Name</Label>
              <Input
                onChange={(e) => setCourseName(e.target.value)}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Course Price</Label>
              <Input
                onChange={(e) => setCoursePrice(e.target.value)}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Description</Label>
              <textarea
                rows={8}
                className="w-full rounded border border-slate-300 px-4 py-2"
                id="username"
                onChange={(e) => setCourseDesc(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              disabled={loading}
              onClick={onSubmit}
              className="bg-[#2795cc]"
            >
              {loading ? "Creating..." : "Create"}{" "}
            </Button>
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
  );
};

export default CreateCourseForm;
