import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import WalletContextProvider from "@/components/WalletContextProvider";


export const metadata: Metadata = {
  title: "Solana Gift Cards",
  description: "Create and send digital gift cards on Solana blockchain",
};



const AppBar = dynamic(
  () => import("../components/AppBar").then((mod) => mod.AppBar),
  
);


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="App dark">
        <React.Suspense fallback={<div>Loading...</div>}>
          <WalletContextProvider>
            <AppBar />
            <div className="AppBody">{children}</div>
            <Footer />
          </WalletContextProvider>
        </React.Suspense>
      </body>
    </html>
  );
}
