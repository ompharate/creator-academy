"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { deleteCourseDb } from "@/lib/actions/course.actions";
interface Course {
  id: string;
  userId: string;
  courseName: string;
  creator: string;
  description: string;
  thambali:string;
  price: string;
}
export default function CourseCard({
  id,
  userId,
  courseName,
  description,
  thambali,
  price,
  creator,
}: Course) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const deleteCourse = async () => {
    setLoading(true);
    await deleteCourseDb(id, userId);
    setLoading(false);
  };
  return (
    <Card className="max-w-4xl mx-auto mt-2">
      <CardHeader>
        <CardTitle>{courseName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          width={300}
          height={300}
          src={thambali}
        />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          onClick={() => router.push(`/dashboard/courses/${userId}/${id}`)}
          className="bg-[#0C1844]"
        >
          Configure
        </Button>
        <Button className="bg-[#C80036]" disabled={loading} onClick={deleteCourse} variant="destructive">
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </CardFooter>
    </Card>
  );
}
