import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useAppSelector } from "@/app/redux";

const Logo = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <Link href="/">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h1
          className={clsx("text-2xl font-bold transition-all duration-500", {
            "w-0 overflow-hidden opacity-0": isSidebarCollapsed,
            "w-auto opacity-100": !isSidebarCollapsed,
          })}
          style={{ minWidth: isSidebarCollapsed ? 0 : "100px" }}
        >
          Stockly
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
