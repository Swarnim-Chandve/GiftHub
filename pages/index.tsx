

// import { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
// import WalletContextProvider from '../components/WalletContextProvider'
// import { AppBar } from '../components/AppBar'
// import { Hero } from '../components/hero/Hero'
// import { Features } from '../components/features/Features'
// import { FAQ } from '../components/faq/FAQ'
// import { CTA } from '../components/calltoact/CTA'
// import { Footer } from '../components/footer/Footer'
// import Head from 'next/head'

// const Home: NextPage = (props) => {
//   return (
//     <div className={styles.App}>
//       <Head>
//         <title>Solana Gift Cards</title>
//         <meta
//           name="description"
//           content="Create and send digital gift cards on Solana blockchain"
//         />
//       </Head>
//       <WalletContextProvider>
//         <AppBar />
//         <div className={styles.AppBody}>
//           <Hero />
//           <Features />
//           <FAQ />
//           <CTA />
//         </div>
//         <Footer />
//       </WalletContextProvider>
//     </div>
//   );
// }

// export default Home;


import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Hero } from '../components/hero/Hero'
import { Features } from '../components/features/Features'
import { FAQ } from '../components/faq/FAQ'
import { CTA } from '../components/calltoact/CTA'
import { Footer } from '../components/footer/Footer'

// Dynamically import wallet-dependent components with explicit default imports
const WalletContextProvider = dynamic(
  () => import('../components/WalletContextProvider'),
  { ssr: false }
)

const AppBar = dynamic(
  () => import('../components/AppBar').then(mod => mod.AppBar),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Solana Gift Cards</title>
        <meta
          name="description"
          content="Create and send digital gift cards on Solana blockchain"
        />
      </Head>
      
      <WalletContextProvider>
        <div className="flex flex-col min-h-screen">
          <AppBar />
          <main className="flex-1 container mx-auto px-4 py-8 space-y-24">
            <Hero />
            <Features />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>
      </WalletContextProvider>
    </div>
  );
}

export default Home;