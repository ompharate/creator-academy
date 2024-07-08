
import CreateCourse from "@/components/card/CreateCourse";
import { getCourses, getCoursesNames } from "@/lib/actions/course.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  if (!user) return null;
  const courses = await getCoursesNames(user.id);
  return (
   <CreateCourse courses={courses} userId={user.id}/>
  );
}
