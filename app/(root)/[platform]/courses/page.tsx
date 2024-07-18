import ModernCourses from "@/components/themes/modern/Courses";
import Navbar from "@/components/themes/modern/Navbar";
import UltraModernCourses from "@/components/themes/ultramodern/Courses";
import UltraModernNavbar from "@/components/themes/ultramodern/Navbar";
import { getCompany } from "@/lib/actions/company.actions";
import { getCourses } from "@/lib/actions/course.actions";
import React from "react";

const page = async ({ params }: { params: { platform: string } }) => {
  const companyData = await getCompany(params.platform);
  const courses = await getCourses(companyData?.userId);

  return (
    <div>
      {companyData?.theme === "modern" ? (
        <Navbar
          companyName={params.platform}
          companyImg={companyData?.companyImageUrl || undefined}
        />

      ) : (
        <UltraModernNavbar companyName={params.platform}
          companyImg={companyData?.companyImageUrl || undefined} />
      )}
      {companyData?.theme === "modern" ? (
        <ModernCourses creator={companyData.user.username} courses={courses} />
      ) : companyData?.theme === "ultraModern" ? (
        <UltraModernCourses creator={companyData.user.username} courses={courses} />
      ) : null}
    </div>
  );
};

export default page;
