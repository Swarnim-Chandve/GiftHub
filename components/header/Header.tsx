import React from 'react'
import { Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
}

export function Header({ isWalletConnected, onConnectWallet }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-16 relative z-10">
      <div className="flex items-center space-x-2">
        <Gift className="h-8 w-8 text-purple-500" />
        <span className="text-2xl font-bold">Solana Gift Cards</span>
      </div>
      <Button
        variant="outline"
        className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
        onClick={onConnectWallet}
      >
        {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
      </Button>
    </header>
  )
}