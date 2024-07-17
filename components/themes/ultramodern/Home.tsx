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

  return <div>ultraModern</div>;
};

export default ultraModern;
    