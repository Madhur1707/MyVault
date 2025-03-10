"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox, Loader2 } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState({
    dashboard: false,
    transaction: false,
  });

  const handleNavigation = (type, href) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    window.location.href = href;
  };

  return (
    <div className="fixed top-0 w-full backdrop-blur-md bg-white/80 border-b z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[#00AEEF]">MY</span>
            <span className="text-[#24324D]">VAULT</span>
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Button
              variant="default"
              disabled={loading.dashboard}
              onClick={() => handleNavigation("dashboard", "/dashboard")}
              className="flex items-center gap-2"
            >
              {loading.dashboard ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <LayoutDashboard size={18} />
              )}
              <span className="hidden md:inline">Dashboard</span>
            </Button>

            <Button
              variant="outline"
              disabled={loading.transaction}
              onClick={() =>
                handleNavigation("transaction", "/transaction/create")
              }
              className="flex items-center gap-2"
            >
              {loading.transaction ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <PenBox size={18} />
              )}
              <span className="hidden md:inline">Add Transaction</span>
            </Button>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="default">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
