import {
  ChartPieIcon,
  LayoutDashboard,
  Package,
  Settings,
  User,
  Warehouse,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Products",
    href: "/products",
    icon: <Package size={20} />,
  },
  {
    label: "Inventory",
    href: "/inventory",
    icon: <Warehouse size={20} />,
  },
  {
    label: "Users",
    href: "/users",
    icon: <User size={20} />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
  {
    label: "Expenses",
    href: "/expenses",
    icon: <ChartPieIcon size={20} />,
  },
];
