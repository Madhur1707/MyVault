"use client";

import { scanReciept } from "@/action/transaction";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Camera, Loader2Icon } from "lucide-react";
import { useRef } from "react";

const RecieptScanner = ({ onScanComplete }) => {
  const fileInputRef = useRef();

  const {
    loading: scanRecieptLoading,
    fn: scanRecieptFn,
    data: scannedData,
  } = useFetch(scanReciept);

  const handleRecieptScan = () => {};

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleRecieptScan(file);
        }}
      />
   <Button className="w-full h-10 bg-gradient-to-r from-blue-900 to-purple-900 text-white font-semibold hover:from-purple-800 hover:to-blue-800 transition-all duration-300 rounded-lg shadow-lg">
        {scanRecieptLoading ? (
          <>
            <Loader2Icon className="h-4 w-4 animate-spin" />
            <span>Scanning Reciept...</span>
          </>
        ) : (
          <>
            <Camera className="mr-2" /> <span>Reciept with AI</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default RecieptScanner;
