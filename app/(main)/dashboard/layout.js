import { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-4xl md:text-6xl lg:text-[65px] pb-6 bg-gradient-to-r from-black via-gray-800 to-purple-900 text-transparent bg-clip-text font-semibold tracking-tight leading-tight">
        Dashboard
      </h1>

      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#933ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;