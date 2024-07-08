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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newCourseValidation } from "@/lib/validations/course";
import { createCourse, createLecture } from "@/lib/actions/course.actions";
import { useRouter } from "next/navigation";
import UploadButtonForm from "./UploadButtonForm";
interface props {
  userId: string;
  courseName: string;
  coursePrice: string;
  courseDesc: string;
  courseImg: string;
  courses: {
    id: string;
    courseName: string;
  }[];
  setCourseName: React.Dispatch<React.SetStateAction<string>>;
  setCoursePrice: React.Dispatch<React.SetStateAction<string>>;
  setCourseDesc: React.Dispatch<React.SetStateAction<string>>;
  setCourseImg: React.Dispatch<React.SetStateAction<string>>;
}
const CreateCourseForm = ({ propsData }: { propsData: props }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState("");
  const [setSelectedCourse, setSetSelectedCourse] = useState("");
  const [topicName, setTopicName] = useState("");
  console.log("video file", videoFile);
  const onSubmit = async () => {
    setLoading(true);
    const course = {
      courseName: propsData.courseName,
      creator: propsData.userId,
      coursePrice: propsData.coursePrice,
      description: propsData.courseDesc,
      courseImg: propsData.courseImg,
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

  const uploadLecture = async () => {
    
    try {
      setLoading(true);
      const lectureData = {
        lecture: videoFile || "",
        courseId: setSelectedCourse || "",
        creator: propsData.userId || "",
        topicName: topicName || "",
      };      
      console.log(lectureData)
      if(!lectureData) return null;
      await createLecture(lectureData);
      } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };  

  return (
    <Tabs defaultValue="account" className="flex-grow">
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
              <UploadButtonForm setCourseImg={propsData.setCourseImg} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Course Name</Label>
              <Input
                onChange={(e) => propsData.setCourseName(e.target.value)}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Course Price</Label>
              <Input
                onChange={(e) => propsData.setCoursePrice(e.target.value)}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Description</Label>
              <textarea
                rows={8}
                className="w-full rounded border border-slate-300 px-4 py-2"
                id="username"
                onChange={(e) => propsData.setCourseDesc(e.target.value)}
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
              <Input onChange={(e) => setTopicName(e.target.value)} id="current" placeholder="Enter topic name" type="text" />
            </div>
            <div className="space-y-1">
              <Select onValueChange={(value)=>setSetSelectedCourse(value)}>
                <SelectTrigger >
                  <SelectValue placeholder="Select the course" />
                </SelectTrigger>
                <SelectContent>
                  {propsData.courses.map((course) => (
                    <SelectItem value={course.id}>
                      {course.courseName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Choose video</Label>
              <UploadButtonForm setCourseImg={setVideoFile} />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loading} onClick={uploadLecture} className="bg-[#2795cc]">
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CreateCourseForm;
