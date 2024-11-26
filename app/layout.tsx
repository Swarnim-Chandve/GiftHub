import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/footer/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gifting on Solana",
  description: "Create and send digital gift on Solana blockchain",
};

const WalletContextProvider = dynamic(
    () =>
      import("../components/WalletContextProvider").then((mod) => mod.default),
  );

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
