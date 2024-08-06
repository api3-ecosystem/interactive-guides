// @ts-nocheck
'use client';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import { injected } from 'wagmi/connectors';

export const config: any = createConfig({
  // Add all chains that your dapp needs to be supported
  chains: [mainnet],
  // Add transport [chainName.id]: http()  for each supported chains
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [injected()],
});
const queryClient = new QueryClient();

export const Web3Provider = ({ children }: any) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
