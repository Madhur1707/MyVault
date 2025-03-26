import { Suspense } from "react";
import DashboardPage from "./page";
import { ClipLoader } from "react-spinners";
import { WalletMinimal } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl pb-6 text-gray-800 font-semibold tracking-tight leading-snug ml-5">
        <WalletMinimal className="h-12 w-12 font-bold text-gray-800 mr-3" />
        Dashboard
      </h1>

      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full absolute top-30">
            <ClipLoader
              color="#12CAD6"
              size={50}
              speedMultiplier={1.5} // Adjust speed
              cssOverride={{
                borderWidth: "6px",
                animation: "spin 1s linear infinite",
              }}
            />
          </div>
        }
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
