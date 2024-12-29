"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto  text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-r from-black via-teal-500 to-purple-900 text-transparent bg-clip-text font-semibold tracking-tight leading-tight">
          Manage Your Finances <br /> with Intelligence
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-serif">
          Take control of your finances with smart tool, expert guidance, and
          personalized solutions tailored to your unique goals.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href={"/dashboard"}>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/Madhur1707">
            <Button size="lg" variant="bluish" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="px-2 py-4">
          <div>
            <Image
              src="/ban2.jpg"
              width={1200}
              height={720}
              alt="Dashboard Preview"
              priority
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
