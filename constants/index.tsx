import React from "react";
import { MdOutlineVideoLibrary, MdDashboard } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { BiSolidAnalyse } from "react-icons/bi";
import { UserButton } from "@clerk/nextjs";
interface DashboardTabsProps {
  tab?: string;
  icon?: React.ReactNode;
  url: string;
}

export const tabs: DashboardTabsProps[] = [
  {
    tab: "Dashboard",
    icon: <MdDashboard />,
    url: "/dashboard",
  },
  {
    tab: "Courses",
    icon: <MdOutlineVideoLibrary />,
    url: "/dashboard/courses",
  },
  {
    tab: "Create Course",
    icon: <IoAddSharp />,
    url: "/dashboard/create",
  },
  {
    tab: "Analytics",
    icon: <BiSolidAnalyse />,
    url: "/dashboard/analytics",
  },
  {
    icon: <UserButton />,
    url: "/dashboard/analytics",
  },
 
];
