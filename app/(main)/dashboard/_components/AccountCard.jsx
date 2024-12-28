import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";

const AccountCard = ({ account }) => {
  const { name, type, balance, id, isDefault } = account;

  return (
    <Card className="group relative rounded-lg overflow-hidden border border-gray-200  hover:shadow-md ">
      <Link href={`account/${id}`}>
        <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 p-4 text-white">
          <CardTitle className="text-lg font-semibold capitalize">
            {name}
          </CardTitle>
          <Switch />
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
