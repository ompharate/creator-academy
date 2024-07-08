import React from "react";
import { Button } from "../ui/button";

interface props {
  courseName: string;
  courseDesc: string;
  coursePrice: string;
  courseImg: string;
}
const NewCoursePreview = ({ propsData }: { propsData: props }) => {
  return (
    <div className="w-full lg:w-[20%]">
      <div className="border border-gray-400 rounded-lg shadow-md shadow-gray-400">
        <img
          src={
            propsData.courseImg
              ? propsData.courseImg
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
          }
          className="object-cover w-full rounded-lg"
          alt="thambali"
        />
        <h1 className="font-bold">{propsData.courseName ? propsData.courseName : "XYZ"}</h1>
        <p className="text-wrap">{propsData.courseDesc ? propsData.courseDesc : "xyz"}</p>
        <div className="flex p-5">
          <Button className="flex-grow">Buy ₹{propsData.coursePrice ? propsData.coursePrice : "000"}</Button>
        </div>
      </div>
    </div>
  );
};

export default NewCoursePreview;
