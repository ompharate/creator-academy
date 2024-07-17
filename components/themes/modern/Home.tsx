import React from "react";
import Navbar from "./Navbar";
import HomeCard from "./HomeCard";

interface companyInt {
  companyName: string;
  companyPic: string;
  companyTheme: string | null;
  creatorEmail: string;
  creatorId: string;
  id: string;
}

const ModernHome = ({ companyData }: { companyData: companyInt }) => {
 
  return <div>
    <Navbar companyName={companyData.companyName} companyImg={companyData.companyPic}/>
    <HomeCard companyName={companyData.companyName}/>
  </div>;
};

export default ModernHome;
