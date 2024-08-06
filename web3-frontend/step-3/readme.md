# Web3 frontend with React and connectKit

- Install dependencies to setup connectKit and wagmi config

```bash
 yarn add connectkit wagmi viem@2.x @tanstack/react-query or  npm install connectkit wagmi viem@2.x @tanstack/react-query
```

- Coding Web3Provider.tsx component to handle wallet connections with connectKit

Create a new file named `Web3Provider.tsx` in the `src` directory and add the following code:

```typescript
// @ts-nocheck
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import { injected } from "wagmi/connectors";

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
```

- Wrap the root component `main.jsx` with `Web3Provider`

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Web3Provider } from "./Web3Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>
);
```

- Use `ConnectKitButton` button in `App.tsx` component to connect wallets

```typescript
import "./App.css";
import { ConnectKitButton } from "connectkit";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ConnectKitButton />
      </div>
      <h1>Welcome to API3 ecosystem</h1>
    </div>
  );
}

export default App;
```

- Now you are all set to connect wallets in your vite application. Run your app with

```bash
yarn dev or npm run dev
```
