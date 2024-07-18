import React from 'react'

interface courses {
  id: string;
  courseName: string;
  tags: string[];
  thambali: string;
  creator: string;
  description: string;
  price: string;
  lectures: string[];
}
const UltraModernCourses = ({
  creator,
  courses,
}: {
  creator: string;
  courses: courses[];
}) => {
  return <div className="flex max-w-6xl flex-wrap gap-4 mx-auto my-4">
    {courses.map((course) => (
      <div className="border border-gray-400 rounded-md  max-w-[300px]">
        <img className="h-[200px] w-[300px]" src={course.thambali} />
        <div className="px-2 py-2 min-h-28 h-28">
          <h2 className="text-heading4-medium">{course.courseName}</h2>
          <p className="text-body-regular">{course.description.substring(0, 30)}...</p>
          <p className="text-small-regular"> {creator}</p>
        </div>
        <div className="px-2 py-2">
          <button className="bg-primary-500 w-full rounded-md py-2 px-2 text-white text-small-medium hover:shadow-md">
            ₹ {course.price}
          </button>
        </div>
      </div>
    ))}
  </div>

}

export default UltraModernCourses