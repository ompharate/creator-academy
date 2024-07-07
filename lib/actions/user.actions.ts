"use server";
import prisma from "../prisma";
interface params {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  platformPic: string;
  platformName: string;
}
export async function createUser(userData: params) {
  try {
    const { userId, firstName, lastName, platformPic, email, platformName } =
      userData;

  

    await prisma.user.create({
      data: {
        id: userId,
        username: firstName + lastName,
        email: email,
        onBoarded: true,
      },
    });

    await prisma.company.create({
      data: {
        companyName: platformName,
        companyImageUrl: platformPic,
        slug: platformName,
        userId: userId,
      },
    });

    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}

export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

export async function getCompony(userId: string) {
  try {
    const company = await prisma.company.findFirst({
      where: {
        userId: userId,
      },
    });
    return company;
  } catch (error) {
    console.log(error);
  }
}
