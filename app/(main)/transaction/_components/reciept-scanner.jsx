"use client";
import { scanReciept } from "@/action/transaction";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Camera, Loader2Icon } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const RecieptScanner = ({ onScanComplete }) => {
  const fileInputRef = useRef();

  const {
    loading: scanRecieptLoading,
    fn: scanRecieptFn,
    data: scannedData,
  } = useFetch(scanReciept);

  const handleRecieptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    await scanReciept(file);
  };

  useEffect(() => {
    if (scannedData && !scanRecieptLoading) {
      onScanComplete(scannedData);
      toast.success("Reciept scanned successfully");
    }
  }, [scanRecieptLoading, scannedData]);

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
      <Button
        type="button"
        variant="outline"
        className="w-full h-10 bg-gradient-to-r from-blue-900 to-purple-900 text-white font-semibold hover:from-purple-800 hover:to-blue-800 hover:text-white transition-all duration-300 rounded-lg shadow-lg"
        onClick={() => fileInputRef.current?.click()}
        disabled={scanRecieptLoading}
      >
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
