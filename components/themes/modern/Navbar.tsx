import Link from "next/link";
import React from "react";

const Navbar = ({
  companyName,
  companyImg,
}: {
  companyName: string;
  companyImg: string | undefined;
}) => {
  return (
    <div className="bg-primary-500">
      <ul className="flex justify-between gap-2 max-w-6xl mx-auto items-center p-4">
        <li>
          <Link className="text-heading3-bold text-white flex gap-2 items-center" href={`/${companyName}`}>
             <img className="rounded-full" width={30} height={30} src={companyImg}/>
            {companyName}
          </Link>
        </li>
        <li className="text-body-semibold text-white">
          <Link href={`/${companyName}/courses`}>Courses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
