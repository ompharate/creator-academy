
import CreateCourseForm from "@/components/form/CreateCourseForm";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  if(!user) return null;
  return (
    <CreateCourseForm userId={user.id}/>
  );
}
