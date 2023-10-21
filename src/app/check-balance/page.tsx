"use client";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import ConnectWallet from "./connect-wallet";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";

const CheckBalancePage = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "29301546-e6a3-46f6-b2cb-3fc630181179",
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
