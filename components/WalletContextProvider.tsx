


// import { FC, ReactNode } from 'react';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import * as web3 from '@solana/web3.js'
// import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
// require('@solana/wallet-adapter-react-ui/styles.css');

// const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   // Using devnet for development, change to mainnet-beta for production
//   const endpoint = web3.clusterApiUrl('devnet')
//   // Added more wallet adapters for broader wallet support
//   const wallets = [
//     new walletAdapterWallets.PhantomWalletAdapter(),
//     new walletAdapterWallets.SolflareWalletAdapter(),
  
//   ]

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           {children}
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   )
// }

// export default WalletContextProvider


import { FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from '@solana/web3.js'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,

} from '@solana/wallet-adapter-wallets';

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
   
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider;