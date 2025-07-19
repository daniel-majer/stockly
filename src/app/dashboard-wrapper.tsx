"use client";

import React from "react";
import Navbar from "./_navigation/navbar/navbar";
import Sidebar from "./_navigation/sidebar/sidebar";
import StoreProvider from "./redux";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardWrapperProps) => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
};
const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
