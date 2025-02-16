import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full backdrop-blur-md bg-white/80 border-b z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[#00AEEF]">MY</span>
            <span className="text-[#24324D]">VAULT</span>
          </h1>
          {/* <Image
            src="/Logo.png"
            width={200}
            height={100}
            alt="MyVault"
            className="h-12 w-auto object-contain"
          /> */}
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="default">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link
              href={"/transaction/create"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
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
