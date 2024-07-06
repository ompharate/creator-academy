import OnboardingAccountForm from "@/components/form/OnboardingAccountForm";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  let user = null;
  try {
    user = await currentUser();
  } catch (error) {
    console.log(error)
    redirect("/sign-in")
  }

  if (!user) return null;
  const dbUser = await getUser(user?.id);
  if (dbUser?.onBoarded) redirect("/dashboard");

  const userData = {
    userId: user.id,
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    profilePic: user?.imageUrl || "",
  };
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-start px-10 py-10">
      <Image src={"/assets/logo.webp"} height={100} width={100} alt="logo" />
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 mb-4 text-base-regular">
        Complete your profile now, to use CreatorsAcademy.
      </p>
      <OnboardingAccountForm user={userData} />
    </div>
  );
};

export default Page;
