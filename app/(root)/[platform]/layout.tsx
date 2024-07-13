import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import ModernHome from "@/components/themes/modern/Home";
import ultraModern from "@/components/themes/ultramodern/Home";
import { getCompany } from "@/lib/actions/company.actions";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { platform: string };
}): Promise<Metadata> {
  const title = params.platform || "Course Platform";
  const description = `Page for platform: ${params.platform}`;
  return {
    title,
    description,
  };
}

const themes = {
  modern: ModernHome,
  ultraModern: ultraModern,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { platform: string };
}) {
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
  if (!companyData) return null;
  console.log(companyData.companyTheme);
  const ThemeComponent = themes[companyData?.companyTheme] || themes.modern;
  // return <ThemeComponent companyData={companyData} />;
}
