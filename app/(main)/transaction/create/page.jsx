import { getUserAccounts } from "@/action/dashboard";

const AddTransactionPage = async () => {
  const accounts = await getUserAccounts();
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl pb-6 text-gray-800 font-semibold tracking-tight leading-snug ml-5">
        Add Transaction
      </h1>
    </div>
  );
};

export default AddTransactionPage;
