import { getUserAccounts } from "@/action/dashboard";
import { defaultCategories } from "@/data/categories";
import AddTrasactionForm from "../_components/transaction-form";
import { getTransaction } from "@/action/transaction";

const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();

  const editId = searchParams?.edit;

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl pb-6 text-gray-800 font-semibold tracking-tight leading-snug">
        {editId ? "Edit" : "Add"} Transaction
      </h1>
      <AddTrasactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;
