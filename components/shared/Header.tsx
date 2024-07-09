"use client"
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
  return (
    <div className="flex max-w-7xl mx-auto justify-around items-center bg-[#0C1844] mb-3 rounded-b-2xl">
      <div>
        <Image width={80} height={80} src={"/assets/logo-only.png"} alt="logo" />
      </div>
      <div className=" hidden  gap-8 cursor-pointer lg:flex">
        <Link href={"/about"}>
          <span className="font-semibold text-white hover:text-[#FFF5E1]">About</span>
        </Link>
        <Link href={"/developer"}>
          <span className="font-semibold text-white hover:text-[#FFF5E1]">Developer</span>
        </Link>
        <Link href={"contact"}>
          <span className="font-semibold text-white hover:text-[#FFF5E1]">Contact</span>
        </Link>
      </div>
      <div>
        <Button className="bg-[#C80036]   hover:bg-[#FF6969]" onClick={()=>router.replace('/sign-in')}>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
