import React from "react";

interface companyInt {
  companyName: string;
  companyPic: string;
  companyTheme: string | null;
  creatorEmail: string;
  creatorId: string;
  id: string;
}
const ultraModern = ({ companyData }: { companyData: companyInt }) => {
  console.log("the data is:", companyData);
  return <div>ultraModern</div>;
};

export default ultraModern;
    