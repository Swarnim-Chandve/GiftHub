"use client";

import { FC } from "react";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then(mod => mod.WalletMultiButton),
  { ssr: false }
);

export const AppBar: FC = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-purple-500" />
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            >
              GiftHub
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
            <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 transition-colors" />
          </nav>

          <div className="md:hidden">
            <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 transition-colors" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
