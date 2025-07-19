"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import style from "styled-jsx/style";
import { useAppSelector } from "@/app/redux";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <Link
      href={href}
      className={clsx(
        `flex items-center gap-x-2 rounded-md px-4 py-3 text-sm font-medium transition-colors ${
          isActive
            ? "text-sidebar-accent-foreground bg-gray-200"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
        } `,
      )}
    >
      <span className="">{icon}</span>
      <span
        className={clsx("transition-all duration-500", {
          "w-0 overflow-hidden opacity-0": isSidebarCollapsed,
          "opacity-100": !isSidebarCollapsed,
        })}
        style={{ minWidth: isSidebarCollapsed ? 0 : "100px" }}
      >
        {label}
      </span>
    </Link>
  );
};

export default SidebarItem;
