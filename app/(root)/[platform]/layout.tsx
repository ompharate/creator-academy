import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/themes/modern/Navbar";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
