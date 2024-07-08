
import { tabs } from "@/constants";
import Link from "next/link";
import React from "react";

const DashboardTabs = () => {
  return (
    <div className="w-full">
    <nav className="flex justify-around w-full bg-red-400 text-white font-medium">
      {tabs.map((tab) => (
        <Link key={tab.url} href={tab.url} className="flex gap-2 items-center p-2">
          {tab.icon}
          <span className="hidden lg:block">{tab.tab}</span>
        </Link>
      ))}
    </nav>
  </div>
  );
};
  
export default DashboardTabs;
