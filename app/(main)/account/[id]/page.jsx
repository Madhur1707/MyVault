
import { getAccountWithTransactions } from "@/action/accounts";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import TransactionTable from "../_components/transaction-table";
import AccountChart from "../_components/account-chart";


const AccountPage = async ({ params }) => {

  const accountData = await getAccountWithTransactions(params.id)

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground ml-2">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ₹ {parseFloat(account.balance).toFixed(2)}
          </div>
          <p>{account._count.transactions} Transactions</p>
        </div>
      </div>

      {/* Chart Section  */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <ClipLoader
              color="#12CAD6"
              size={50}
              cssOverride={{ borderWidth: "6px", marginTop: "4px" }}
            />
          </div>
        }
      >
        
        <AccountChart transactions={transactions} />
      </Suspense>
      {/* Transaction Table  */}


      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <ClipLoader
              color="#12CAD6"
              size={50}
              cssOverride={{ borderWidth: "6px", marginTop: "4px" }}
            />
          </div>
        }
      >
        
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;
