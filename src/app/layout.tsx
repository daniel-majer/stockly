import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardWrapper from "./dashboard-wrapper";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stockly Inventory Management App",
  description: "Crafted by Danxz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
