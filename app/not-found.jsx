import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-r from-black via-gray-800 to-purple-900 text-transparent bg-clip-text font-semibold tracking-tight leading-tight">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
