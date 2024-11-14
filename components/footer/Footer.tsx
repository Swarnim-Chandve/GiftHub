import React from 'react'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative z-10 bg-gray-800 bg-opacity-50 text-gray-400 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Solana Gift Cards</h3>
            <p>Revolutionizing digital gifting on the Solana blockchain</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Solana Gift Cards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}