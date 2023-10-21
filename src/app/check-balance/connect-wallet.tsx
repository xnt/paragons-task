"use client";

import LoadingIndicator from "@/components/loading-indicator";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useNetwork } from "wagmi";
import WalletDataDisplay from "./wallet-data-display";

const ConnectWallet = () => {
  const [connectedAccount, setConnectedAccount] = useState<string>();
  const { loadingNetwork, isVerificationInProgress } = useDynamicContext();
  const {
    address,
    isReconnecting: isAccountLoading,
    isConnecting: isAccountConnecting,
  } = useAccount();
  const { chain } = useNetwork();
  const chainId = chain?.id;
  const {
    data,
    isLoading: isBalanceLoading,
    isFetching: isFetchingBalance,
  } = useBalance({
    address,
    chainId,
  });
  useEffect(() => {
    if (address) {
      setConnectedAccount(address);
    }
  }, [address]);

  // I doubt that there are any advantages to memoizing this (boolean comparisons are fast)
  // but might be worth looking into if this component is slow
  const isLoading =
    isAccountLoading ||
    isBalanceLoading ||
    loadingNetwork ||
    isVerificationInProgress ||
    isAccountConnecting ||
    isFetchingBalance;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-fit-content justify-center self-center">
        <DynamicWidget variant="modal" />
      </div>
      {connectedAccount && chain ? (
        <WalletDataDisplay
          address={connectedAccount!}
          network={chain!.name}
          balance={data!.formatted}
          mainToken={data!.symbol}
        />
      ) : (
        <p className="mt-4">
          There&apos;s no connected wallet. Please use the button above.
        </p>
      )}
    </div>
  );
};

export default ConnectWallet;
