interface WalletDataDisplayProps {
  address: string;
  network: string;
  balance: string;
  mainToken: string;
}

const WalletDataDisplay = ({
  address,
  network,
  balance,
  mainToken,
}: WalletDataDisplayProps) => {
  return (
    <div className="-z-10">
      <div className="px-4 mt-3">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Connected Wallet Information
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-3">
            <dt className="text-sm font-medium leading-5 text-gray-500">
              Address
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">{address}</dd>
          </div>
          <div className="px-4 py-3">
            <dt className="text-sm font-medium leading-5 text-gray-500">
              Network
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">{network}</dd>
          </div>
          <div className="px-4 py-3">
            <dt className="text-sm font-medium leading-5 text-gray-500">
              Main token balance
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">
              {balance} {mainToken}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default WalletDataDisplay;
