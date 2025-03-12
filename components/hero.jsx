"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text & Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-[40px] pb-6 bg-gradient-to-r from-gray-300 via-teal-400 to-purple-500 text-transparent bg-clip-text font-bold tracking-tight leading-tight">
            Smarter Financial Management
          </h1>
          <p className="text-lg text-gray-300 justify-center items-center mb-8 max-w-md md:max-w-lg font-sans">
            Gain complete control over your finances with AI-powered insights,
            expert recommendations, and tailored solutions for financial growth.
            Make smarter decisions, track your expenses effortlessly, and secure
            a financially stable future with ease.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/Madhur1707">
              <Button
                size="lg"
                className="px-8 bg-gray-800 hover:bg-gray-700 transition-transform transform hover:scale-105"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative group">
            <Image
              src="/banner.png"
              width={500}
              height={600}
              alt="Dashboard Preview"
              priority
              className="rounded-lg shadow-2xl border mx-auto transition-transform transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
