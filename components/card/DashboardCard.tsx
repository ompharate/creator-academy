import React from 'react'
import { BsPersonVideo2 } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
const DashboardCard = ({courseLength}:{courseLength:number}) => {
  return (
    <div className="flex flex-col  items-center justify-center mt-5 max-w-7xl gap-10 mx-auto lg:flex-row">
    <div className="w-1/2 border-[#2795cc] border bg-[#2795cc] p-10 rounded-xl text-white shadow-lg shadow-gray-400">
      <div className="flex items-center justify-between">
        <h1 className="text-heading2-bold">{courseLength}</h1>
        <BsPersonVideo2 size={20} />
      </div>
      <h2 className="text-heading3-medium">Courses</h2>
    </div>

    <div className="w-1/2 border-[#2795cc] border bg-[#2795cc] p-10 rounded-xl text-white shadow-lg shadow-gray-400">
      <div className="flex items-center justify-between">
        <h1 className="text-heading2-bold">0</h1>
        <FaUsers size={20} />
      </div>
      <h2 className="text-heading3-medium ">Users</h2>
    </div>

    <div className="w-1/2 border-[#2795cc] border bg-[#2795cc] p-10 rounded-xl text-white shadow-lg shadow-gray-400">
      <div className="flex items-center justify-between">
        <h1 className="text-heading2-bold">₹0</h1>
        <RiMoneyRupeeCircleFill size={20} />
      </div>
      <h2 className="text-heading3-medium ">Earning</h2>
    </div>

    <div className="w-1/2 border-[#2795cc] border bg-[#2795cc] p-10 rounded-xl text-white shadow-lg shadow-gray-400">
      <div className="flex items-center justify-between">
        <h1 className="text-heading2-bold">0</h1>
        <BsPersonVideo2 size={20} />
      </div>
      <h2 className="text-heading3-medium ">Lectures</h2>
    </div>
  </div>
  )
}

export default DashboardCard