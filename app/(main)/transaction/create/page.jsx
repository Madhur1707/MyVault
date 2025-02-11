import { getUserAccounts } from "@/action/dashboard";
import { defaultCategories } from "@/data/categories";
import AddTrasactionForm from "../_components/transaction-form";

const AddTransactionPage = async () => {
  const accounts = await getUserAccounts();
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl pb-6 text-gray-800 font-semibold tracking-tight leading-snug ml-5">
        Add Transaction
      </h1>
      <AddTrasactionForm
      accounts={accounts}
      categories={defaultCategories}
      />
    </div>
  );
};

export default AddTransactionPage;
