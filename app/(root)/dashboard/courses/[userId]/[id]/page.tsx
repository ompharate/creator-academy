import ConfigureCourseForm from "@/components/form/ConfigureCourseForm";
import { getCourse } from "@/lib/actions/course.actions";
import React from "react";
interface params {
  id: string;
  userId: string;
}
const page = async ({ params }: { params: params }) => {
  const courseDetails = await getCourse(params?.id, params?.userId);
  if (!courseDetails) return null;
  return (
    <div className="max-w-7xl mx-auto flex justify-center mt-5">
      <ConfigureCourseForm courseDetails={courseDetails} />
    </div>
  );
};
export default page;