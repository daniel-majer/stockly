"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-x-2 rounded-md px-4 py-3 text-sm font-medium transition-colors ${
        isActive
          ? "bg-gray-200 text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default SidebarItem;
