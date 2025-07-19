import {
  LucideChartPie,
  LucideLayoutDashboard,
  LucidePackage,
  LucideSettings,
  LucideUser,
  LucideWarehouse,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LucideLayoutDashboard size={20} />,
  },
  {
    label: "Products",
    href: "/products",
    icon: <LucidePackage size={20} />,
  },
  {
    label: "Inventory",
    href: "/inventory",
    icon: <LucideWarehouse size={20} />,
  },
  {
    label: "Users",
    href: "/users",
    icon: <LucideUser size={20} />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <LucideSettings size={20} />,
  },
  {
    label: "Expenses",
    href: "/expenses",
    icon: <LucideChartPie size={20} />,
  },
];
