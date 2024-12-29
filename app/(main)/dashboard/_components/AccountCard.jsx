"use client";
import { updateDefaultAccount } from "@/action/accounts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import useFetch from "@/hooks/use-fetch";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

const AccountCard = ({ account }) => {
  const { name, type, balance, id, isDefault } = account;

  const {
    data: updatedAccount,
    error,
    fn: updateDefaultFn,
    loading: updateDefaultLoading,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault();

    if (isDefault) {
      toast.warning("You need atleast 1 default account");
      return; //Dont allow toggling off the Default Account
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account successfully updated");
    }
  }, [updatedAccount, updateDefaultLoading]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Card className="group relative rounded-lg overflow-hidden border border-gray-200  hover:shadow-md  ">
      <Link href={`account/${id}`}>
        <CardHeader className="flex flex-row items-center justify-between bg-gray-50 border-b border-gray-200 p-4 rounded-lg shadow-sm">
          <CardTitle className="text-xl font-medium text-gray-800 capitalize">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
            className="bg-gray-300 focus:ring focus:ring-indigo-500 transition-all duration-200 rounded-full"
          />
        </CardHeader>

        <CardContent className="p-4 bg-white">
          <div className="text-2xl font-semibold text-gray-900">
            ₹ {parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-xs text-gray-500">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-gray-500 p-4 bg-gray-50">
          <div className="flex items-center">
            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
