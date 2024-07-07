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
import { updateCourseDb } from "@/lib/actions/course.actions";
interface courseDetails {
  id: string;
  courseName: string;
  creator: string;
  description: string;
  price: string;
}
const ConfigureCourseForm = ({
  courseDetails,
}: {
  courseDetails: courseDetails;
}) => {
  const [courseName, setCourseName] = useState(courseDetails.courseName);
  const [coursePrice, setCoursePrice] = useState(courseDetails.price);
  const [courseDescription, setCourseDescription] = useState(
    courseDetails.description
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const newCourseData = {
        courseId: courseDetails.id,
        userId: courseDetails.creator,
        data: {
          courseName,
          price: coursePrice,
          description: courseDescription,
        },
      };
      await updateCourseDb(newCourseData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Course</TabsTrigger>
        <TabsTrigger value="password">Enrollment History</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>{courseDetails.courseName}</CardTitle>
            <CardDescription>configure your course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Course Name</Label>
              <Input
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Course Price</Label>
              <Input
                onChange={(e) => setCoursePrice(e.target.value)}
                value={coursePrice}
                id="username"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Course Description</Label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2"
                rows={4}
                id="username"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loading} onClick={onSubmit}>{loading ? "updating..." : "Save changes"}</Button>
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
  );
};

export default ConfigureCourseForm;
