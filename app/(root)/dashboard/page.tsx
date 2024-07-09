import DashboardCard from "@/components/card/DashboardCard";
import UserPlatform from "@/components/card/UserPlatform";
import UsersTable from "@/components/card/UsersTable";
import { getCoursesLength } from "@/lib/actions/course.actions";
import { getCompony } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";



const Page = async () => {
  const user = await currentUser();
  if(!user) return null;
  const userCompany = await getCompony(user.id);

  if(!userCompany) return null;
  const coursesLength = await getCoursesLength(user.id);  
;

  return (
    <div className="bg-[#0C1844]">
      {/* <DashboardTabs /> */}
      <UserPlatform  slug={userCompany.slug} />
      <DashboardCard courseLength={coursesLength}/>
      <UsersTable />
    </div>
  );
};

export default Page;
