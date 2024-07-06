import DashboardCard from "@/components/card/DashboardCard";
import UserPlatform from "@/components/card/UserPlatform";
import UsersTable from "@/components/card/UsersTable";
import DashboardTabs from "@/components/shared/DashboardTabs";
import { getCompony } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Page = async () => {
  const user = await currentUser();
  if(!user) return null;
  const userCompany = await getCompony(user.id);
  if(!userCompany) return null;
  
  return (
    <div>
      {/* <DashboardTabs /> */}
      <UserPlatform  slug={userCompany.slug} />
      <DashboardCard />
      <UsersTable />
    </div>
  );
};

export default Page;
