import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="text-center mb-24 relative z-10" id='contact'>
      <h2 className="text-3xl font-bold mb-6">Ready to Start Gifting?</h2>
      <p className="text-xl text-gray-400 mb-8">Join thousands of users already sending crypto gifts with ease</p>
      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
        Get Started
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </section>
  )
}