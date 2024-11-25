



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How does Solana Gift Cards work?",
    answer: "Solana Gift Cards allows you to create and send digital gift cards using Solana blockchain. You can specify the amount, add a personal message, and send it instantly to anyone with a Solana wallet.",
    icon: "🎁"
  },
  {
    question: "Is it secure?",
    answer: "Yes, we use military-grade encryption and leverage the security of the Solana blockchain to ensure your gifts are safe and can only be claimed by the intended recipient.",
    icon: "🔒"
  },
  {
    question: "What currencies can I gift?",
    answer: "Currently, you can gift SOL and any SPL tokens supported on the Solana network. We're constantly working on adding support for more tokens.",
    icon: "💎"
  },
  {
    question: "Are there any fees?",
    answer: "We charge a small fee for creating and sending gift cards. The fee is used to cover operational costs and Solana network fees. You can view the exact fee before confirming your gift card creation.",
    icon: "💫"
  }
];

export default function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 px-4 md:px-8" id="faq">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      
      {/* Content Container */}
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about GiftHub
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="group border border-purple-500/20 bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
              >
                <AccordionTrigger className="flex items-center gap-4 p-6 text-left hover:no-underline">
                  <div className="flex-1 flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <Plus className="icon-rotate h-5 w-5 text-purple-400 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Help Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20"
        >
          <p className="text-gray-300">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105">
            Contact Support
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}