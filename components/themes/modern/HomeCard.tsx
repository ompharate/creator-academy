import Image from "next/image";
import React from "react";

const HomeCard = ({companyName}:{companyName:string}) => {
  return (
    <div className="flex justify-around items-center max-w-6xl mx-auto bg-gray-300 py-10 rounded-lg my-10">
      <div className="">
        <Image
          width={300}
          height={300}
          alt="modern-home"
          src={"/assets/modern-home.png"}
        />
      </div>
      <div>
        <h1 className="text-heading2-bold">All the skills you need in one place</h1>
        <p className="text-small-regular">
          From critical skills to technical topics, {companyName} supports your
          professional development.
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
