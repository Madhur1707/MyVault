import {
  Wallet,
  Laptop,
  TrendingUp,
  Building,
  Home,
  Plus,
  Car,
  Zap,
  Film,
  UtensilsCrossed,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Smile,
  Plane,
  Shield,
  Gift,
  Receipt,
  MoreHorizontal,
  ShoppingBagIcon,
} from "lucide-react";

export const defaultCategories = [
  // Income Categories
  {
    id: "salary",
    name: "Salary",
    type: "INCOME",
    color: "#34D399", // green-400
    icon: <Wallet />,
  },
  {
    id: "freelance",
    name: "Freelance",
    type: "INCOME",
    color: "#38BDF8", // cyan-400
    icon: <Laptop />,
  },
  {
    id: "investments",
    name: "Investments",
    type: "INCOME",
    color: "#818CF8", // indigo-400
    icon: <TrendingUp />,
  },
  {
    id: "business",
    name: "Business",
    type: "INCOME",
    color: "#EC4899", // pink-500
    icon: <Building />,
  },
  {
    id: "rental",
    name: "Rental",
    type: "INCOME",
    color: "#FBBF24", // amber-400
    icon: <Home />,
  },
  {
    id: "other-income",
    name: "Other Income",
    type: "INCOME",
    color: "#4B5563", // gray-600
    icon: <Plus />,
  },

  // Expense Categories
  {
    id: "housing",
    name: "Housing",
    type: "EXPENSE",
    color: "#F87171", // red-400
    icon: <Home />,
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "transportation",
    name: "Transportation",
    type: "EXPENSE",
    color: "#FB923C", // orange-400
    icon: <Car />,
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  {
    id: "groceries",
    name: "Groceries",
    type: "EXPENSE",
    color: "#84CC16", // lime-400
    icon: <ShoppingBagIcon />,
  },
  {
    id: "utilities",
    name: "Utilities",
    type: "EXPENSE",
    color: "#06B6D4", // cyan-400
    icon: <Zap />,
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    type: "EXPENSE",
    color: "#8B5CF6", // violet-400
    icon: <Film />,
    subcategories: ["Movies", "Games", "Streaming Services"],
  },
  {
    id: "food",
    name: "Food",
    type: "EXPENSE",
    color: "#F43F5E", // rose-400
    icon: <UtensilsCrossed />,
  },
  {
    id: "shopping",
    name: "Shopping",
    type: "EXPENSE",
    color: "#EC4899", // pink-500
    icon: <ShoppingBag />,
    subcategories: ["Clothing", "Electronics", "Home Goods"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    type: "EXPENSE",
    color: "#14B8A6", // teal-400
    icon: <HeartPulse />,
    subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
  },
  {
    id: "education",
    name: "Education",
    type: "EXPENSE",
    color: "#6366F1", // indigo-500
    icon: <GraduationCap />,
    subcategories: ["Tuition", "Books", "Courses"],
  },
  {
    id: "personal",
    name: "Personal Care",
    type: "EXPENSE",
    color: "#D946EF", // fuchsia-400
    icon: <Smile />,
    subcategories: ["Haircut", "Gym", "Beauty"],
  },
  {
    id: "travel",
    name: "Travel",
    type: "EXPENSE",
    color: "#0EA5E9", // sky-400
    icon: <Plane />,
  },
  {
    id: "insurance",
    name: "Insurance",
    type: "EXPENSE",
    color: "#64748B", // slate-400
    icon: <Shield />,
    subcategories: ["Life", "Home", "Vehicle"],
  },
  {
    id: "gifts",
    name: "Gifts & Donations",
    type: "EXPENSE",
    color: "#F472B6", // pink-300
    icon: <Gift />,
  },
  {
    id: "bills",
    name: "Bills & Fees",
    type: "EXPENSE",
    color: "#FB7185", // rose-300
    icon: <Receipt />,
    subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
  },
  {
    id: "other-expense",
    name: "Other Expenses",
    type: "EXPENSE",
    color: "#94A3B8", // slate-400
    icon: <MoreHorizontal />,
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});
