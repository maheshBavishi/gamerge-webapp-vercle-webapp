'use client';

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from '../button';

export default function CustomConnectButton({ fillwhite = false }) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div onClick={openConnectModal} style={{ cursor: 'pointer' }}>
                    <Button text="Connect Wallet" fillwhite={fillwhite} />
                  </div>
                );
              }

              if (chain.unsupported) {
                return (
                  <div onClick={openChainModal} style={{ cursor: 'pointer' }}>
                    <Button text="Wrong network" fillwhite={fillwhite} />
                  </div>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <div
                    onClick={openChainModal}
                    style={{ cursor: 'pointer' }}
                    title="Switch Networks"
                  >
                    <Button
                      text={chain.hasIcon ? `${chain.name}` : chain.name}
                      fillwhite={fillwhite}
                    />
                  </div>

                  <div onClick={openAccountModal} style={{ cursor: 'pointer' }}>
                    <Button
                      text={`${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
                      fillwhite={fillwhite}
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
