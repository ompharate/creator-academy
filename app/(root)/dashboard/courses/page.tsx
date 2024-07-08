import CourseCard from "@/components/card/CourseCard";
import { getCourses } from "@/lib/actions/course.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Page = async () => {
  interface Course {
    id:string,
    courseName: string,
    thambali:string,
    creator: string;
    description: string;
    price: string;
  }

  const user = await currentUser();
  if (!user) return null;
  const courses = await getCourses(user.id);
  // if (!courses) return null;
  return (
    <div className="mt-5">
      {courses.map((course: Course) => (
        <CourseCard
          key={course.id}    
          id={course.id}     
          userId={user?.id} 
          thambali={course.thambali}
          courseName={course.courseName}
          creator={course.creator}
          description={course.description}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default Page;
