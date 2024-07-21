import React from "react";
import UltraModernNavbar from "./Navbar";
import HomeCard from "../modern/HomeCard";

interface companyInt {
  companyName: string;
  companyPic: string;
  companyTheme: string | null;
  creatorEmail: string;
  creatorId: string;
  id: string;
}
const ultraModern = ({ companyData }: { companyData: companyInt }) => {
  return <div>
    <UltraModernNavbar companyName={companyData.companyName} companyImg={companyData.companyPic} />
    <HomeCard companyName={companyData.companyName} />
  </div>;
};

export default ultraModern;
