import ModernHome from "@/components/themes/modern/Home";
import ultraModern from "@/components/themes/ultramodern/Home";
import { getCompany } from "@/lib/actions/company.actions";
import React from "react";

const page = async ({ params }: { params: { platform: string } }) => {
  type ThemeKeys = "modern" | "ultraModern";
  const themes = {
    modern: ModernHome,
    ultraModern: ultraModern,
  };

  const company = await getCompany(params.platform);

  if (!company) return null;
  const companyData = {
    companyName: company?.companyName,
    companyPic: company?.companyImageUrl,
    companyTheme: company?.theme || "modern",
    creatorEmail: company?.user.email,
    creatorId: company?.user.id,
    id: company?.id,
  };

  const companyTheme = companyData.companyTheme as ThemeKeys;
  const ThemeComponent = themes[companyTheme] || themes.modern;
  return <ThemeComponent companyData={companyData} />;
};

export default page;
