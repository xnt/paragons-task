"use client";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import ConnectWallet from "./connect-wallet";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";

const CheckBalancePage = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "76f95615-ef36-463c-8fb0-b1ec52614ea1",
      }}
    >
      <DynamicWagmiConnector>
        <div>
          <h1 className="text-4xl font-bold mb-6">Check Balance</h1>
          <ConnectWallet />
        </div>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default CheckBalancePage;
