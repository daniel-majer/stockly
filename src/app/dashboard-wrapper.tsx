import React from "react";
import Navbar from "./_navigation/navbar/navbar";
import Sidebar from "./_navigation/sidebar/sidebar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
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

export default DashboardWrapper;
