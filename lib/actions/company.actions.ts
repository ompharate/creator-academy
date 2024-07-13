"use server";
import prisma from "../prisma";
export async function getCompany(platform: string) {
  console.log("platform name is:", platform);
  const companyData = await prisma.company.findFirst({
    where: {
      companyName: platform,
    },
    include: {
      user: true,
    },
  });

  return companyData;
}

export async function updateCompany(id: string, theme: string) {
  await prisma.company.update({
    where: {
      id: id,
    },
    data: {
      theme: theme,
    },
  });
}