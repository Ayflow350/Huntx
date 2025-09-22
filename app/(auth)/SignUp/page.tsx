"use client";
import React, { useState } from "react";
import logo from "./assets/Logo.svg";
import SideImage from "./assets/BG.svg";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import GoggleLogo from "./assets/Icon.svg";
import Container from "./components/Container";

const SignUp = () => {
  // Step 1: Set up the state for active tab
  const [activeTab, setActiveTab] = useState<"jobSeeker" | "company">(
    "jobSeeker"
  );

  // Step 2: Define the function to handle tab click
  const handleTabClick = (tab: "jobSeeker" | "company"): void => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      {/* The mobile Header */}
      <div className="mt-3 flex-1 flex-row items-center justify-between  sticky top-0 z-10 pt-4 ">
        <div className="relative ">
          <Image src={logo} alt="The logo image" className="ml-10" />
          <div className="absolute -top-14 -left-5 -z-30 hidden lg:flex w-[800px] h-[900px]">
            <Image src={SideImage} alt="The SideImage" />
          </div>
        </div>
        <div className="text-2xl flex  lg:hidden ">
          <MenuIcon />
        </div>
      </div>

      {/* form page image */}
      <div className="h-[70vh] lg:h-screen  flex-1  text-center lg:mr-10 px-4 justify-center flex   ">
        <div className="mt-10 flex flex-col text-center space-y-8">
          <div className="flex text-center  mx-auto max-w-[250px]">
            {/* Job Seeker Tab */}
            <button
              onClick={() => handleTabClick("jobSeeker")}
              className={`${
                activeTab === "jobSeeker"
                  ? "bg-[#E9EBFD] text-[#4640DE]"
                  : "text-[#4640DE]"
              } font-semibold text-[16px] py-[7px] px-[12px]`}
            >
              Job Seeker
            </button>
            {/* Company Tab */}
            <button
              onClick={() => handleTabClick("company")}
              className={`${
                activeTab === "company"
                  ? "bg-[#E9EBFD] text-[#4640DE]"
                  : "text-[#4640DE]"
              } font-semibold text-[16px] py-[7px] px-[12px]`}
            >
              Company
            </button>
          </div>

          <div>
            <h1 className="font-semibold font-clash text-[#202430]  text-center  text-[25px] lg:text-[32px]">
              Get more opportunities{" "}
            </h1>
          </div>
          <button className="border-[#CCCCF5] mx-auto flex flex-row gap-x-2  border-2 px-[70px] py-[8px] lg:py-[12px] lg:px-[108px]  font-epilogue text-[#4640DE] justify-center items-center font-bold text-[12px] lg:text-[16px] ">
            <span>
              <Image
                src={GoggleLogo}
                alt="GoggleLogo"
                className=" h-[20px] w-[20px]"
              />
            </span>
            Sign Up with Google
          </button>
          <div className="flex items-center text-[#202430]  justify-center my-8">
            <div className="border-t border-gray-300 text-[#202430] flex-grow mr-3"></div>
            <span className="text-gray-500 text-[12px] md:text-base">
              Or sign up with email
            </span>
            <div className="border-t border-gray-300 text-[#202430] flex-grow ml-3"></div>
          </div>
          <div className=" space-y-[22px] px-4">
            <div className="text-left">
              <h1 className="text-[#515B6F] font-semibold mb-2 text-[12px] md:text-base">
                Full Name
              </h1>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border-[1.5px] py-[12px] px-[16px] w-full text-[12px] md:text-base outline-none"
              />
            </div>
            <div className="text-left text-[12px] md:text-base">
              <h1 className="text-[#515B6F] font-semibold mb-2 ">
                Email Address
              </h1>
              <input
                type="text"
                placeholder="Enter email address"
                className="border-[1.5px] py-[12px] px-[16px] w-full outline-none"
              />
            </div>
            <div className="text-left text-[12px] md:text-base">
              <h1 className="text-[#515B6F] font-semibold mb-2">Password</h1>
              <input
                type="text"
                placeholder="Enter password"
                className="border-[1.5px] py-[12px] px-[16px] w-full outline-none"
              />
            </div>
            <button className="bg-[#4640DE] font-epilogue font-bold text-white py-[12px] w-full">
              Continue
            </button>
            <h1 className="text-[#202430] text-[12px] md:text-base">
              Already have an account?{" "}
              <span className="text-[#4640DE] font-semibold">Login</span>
            </h1>
          </div>
          <div className="">
            <p className="w-[400px] text-[#7C8493] text-left md:text-[14px] text-[12px] ">
              By clicking 'Continue', you acknowledge that you have read and
              accept the <span className="text-blue-500">Terms of Service</span>{" "}
              and <span className="text-blue-500">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
