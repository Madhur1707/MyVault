import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyVault",
  description: "One stop finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
