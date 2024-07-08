
import CreateCourse from "@/components/card/CreateCourse";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  if (!user) return null;
  return (
   <CreateCourse userId={user.id}/>
  );
}
