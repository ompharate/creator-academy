"use client";
import React, { useState } from "react";
import CreateCourseForm from "../form/CreateCourseForm";
import NewCoursePreview from "./NewCoursePreview";

const CreateCourse = ({ userId }: { userId: string }) => {
  const [courseName, setCourseName] = useState<string>("");
  const [coursePrice, setCoursePrice] = useState<string>("");
  const [courseDesc, setCourseDesc] = useState<string>("");
  const [courseImg, setCourseImg] = useState<string>("");
  return (
    <div className="flex flex-col gap-20 items-center max-w-[80%] mx-auto mt-5 lg:flex lg:flex-row lg:items-start lg:justify-around">
      <CreateCourseForm propsData={{ userId,courseName, coursePrice, courseDesc,courseImg, setCourseName, setCoursePrice, setCourseDesc,setCourseImg }}  />
      <NewCoursePreview propsData={{ courseName, coursePrice, courseDesc,courseImg }} />
    </div>
  );
};

export default CreateCourse;
