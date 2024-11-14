


import { FC } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Gift, Sparkles } from 'lucide-react'

export const Hero: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="relative py-20 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div variants={itemVariants} className="flex justify-center mb-8">
        <div className="p-3 bg-purple-500/10 rounded-full">
          <Gift className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
      >
        Gifting on Solana
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
      >
        Experience the future of digital gifting. Secure, instant, and powered by Solana blockchain.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 text-white font-semibold transition-all hover:scale-105">
          <span>Create Gift Card</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center space-x-2 text-white font-semibold transition-all hover:scale-105">
          <span>Learn More</span>
          <Sparkles className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.section>
  );
};