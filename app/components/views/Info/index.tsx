import React, { FC } from "react";
import { providers } from "ethers";

import t from "@klimadao/lib/theme/typography.module.css";
import { concatAddress } from "@klimadao/lib/utils";
import { addresses, urls } from "@klimadao/lib/constants";
import { BASE_URL } from "lib/constants";
import CopyAddressButton from "./CopyAddressButton";
import AddToMetaMaskButton from "./AddToMetaMaskButton";
import styles from "./index.module.css";

export interface AdressInfo {
  name: string;
  address: string;
  ariaLabel: string;
  metamaskAriaLabel: string;
  ticker: string;
  image: string;
  decimals: number;
}

interface Props {
  provider?: providers.Web3Provider;
}

export const Info: FC<Props> = (props) => {
  const addressInfo: AdressInfo[] = [
    {
      name: "BLOOM Token",
      address: addresses["mainnet"].klima,
      ariaLabel: "Copy BLOOM token address.",
      metamaskAriaLabel: "Add BLOOM token to wallet.",
      ticker: "BLOOM",
      image: `${BASE_URL}/icons/bloom-logo.jpeg`,
      decimals: 9,
    },
    {
      name: "sBLOOM Token",
      address: addresses["mainnet"].sklima,
      ariaLabel: "Copy sBLOOM token address.",
      metamaskAriaLabel: "Add sBLOOM token to wallet.",
      ticker: "sBLOOM",
      image: `${BASE_URL}/icons/bloom-logo.jpeg`,
      decimals: 9,
    },
    {
      name: "wsBLOOM Token",
      address: addresses["mainnet"].wsklima,
      ariaLabel: "Copy wsKLIMA token address.",
      metamaskAriaLabel: "Add wsKLIMA token to wallet.",
      ticker: "wsKLIMA",
      image: `${BASE_URL}/icons/bloom-logo.jpeg`,
      decimals: 18,
    },
    {
      name: "BCT Token",
      address: addresses["mainnet"].bct,
      ariaLabel: "Copy BCT token address.",
      metamaskAriaLabel: "Add BCT token to wallet.",
      ticker: "BCT",
      image: `${BASE_URL}/icons/bct-logo.jpeg`,
      decimals: 18,
    },
    {
      name: "BCT/USDC LP",
      address: addresses["mainnet"].bctUsdcLp,
      ariaLabel: "Copy BCT USDC LP address.",
      metamaskAriaLabel: "Add BCT USDC LP to wallet.",
      ticker: "BCT/USDC",
      image: `${BASE_URL}/icons/lp-logo.png`,
      decimals: 18,
    },
    {
      name: "BCT/BLOOM LP",
      address: addresses["mainnet"].klimaBctLp,
      ariaLabel: "Copy BLOOM BCT LP address.",
      metamaskAriaLabel: "Add BLOOM BCT LP to wallet.",
      ticker: "BCT/BLOOM",
      image: `${BASE_URL}/icons/lp-logo.png`,
      decimals: 18,
    },
  ];

  return (
    <div className={styles.stakeCard}>
      <div className={styles.stakeCard_header}>
        <h2 className={t.h4}>{"Info & FAQ"}</h2>
        <p className={t.body2}>
          Common app-related questions and useful links. For comprehensive
          reading on BloomDAO, see our{" "}
          <a target="_blank" rel="noreferrer noopener" href={urls.officialDocs}>
            official docs
          </a>
        </p>
      </div>
      <div className={styles.infoSection}>
        <h3 className={t.overline}>FAQ</h3>
        <div style={{ display: "grid", gap: "2.4rem" }}>
          <div style={{ display: "grid", gap: "0.4rem" }}>
            <h4 className={t.h5}>Where can I get BLOOM?</h4>
            <p className={t.body2}>
              See our{" "}
              <a target="_blank" rel="noreferrer noopener" href={urls.tutorial}>
                tutorial for newcomers
              </a>
              .
            </p>
          </div>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            <h4 className={t.h5}>Why won't the dApp load for me?</h4>
            <p className={t.body2}>
              If the app says 'loading...' this is likely a problem with your
              network configuration in Metamask. To fix this: <br />
              1. Open Metamask and switch to Ethereum Mainnet <br />
              2. Go to Settings/Networks/Polygon and click 'delete' <br />
              3. Return to bloom-finance-dashboard.vercel.app and click 'switch to mainnet'.{" "}
              <br />
              Metamask should prompt you to add Polygon, with the correct RPC
              configuration.
            </p>
          </div>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            <h4 className={t.h5}>Why don't I see my sBLOOM balance?</h4>
            <p className={t.body2}>
              There is a small bug affecting users who staked in the first 18
              hours after launch. We have posted{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://klimadao.notion.site/sKLIMA-Bugfix-Instructions-079caaa21f6742daac201781ef5759da"
              >
                step-by-step instructions
              </a>{" "}
              to fix the issue.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <h3 className={t.overline}>OFFICIAL POLYGON ADDRESSES</h3>
        <div style={{ display: "grid", gap: "0.4rem" }}>
          {addressInfo.map((info) => (
            <div key={info.address}>
              <p>{info.name}</p>
              <div className={styles.addressRow}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://polygonscan.com/address/${info.address}`}
                >
                  {concatAddress(info.address)}
                </a>
                <CopyAddressButton
                  ariaLabel={info.ariaLabel}
                  address={info.address}
                />
                {typeof props.provider?.provider?.request === "function" &&
                  props.provider.provider.isMetaMask && (
                    <AddToMetaMaskButton
                      info={info}
                      provider={props.provider}
                    />
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.infoSection}>
        <h3 className={t.overline}>LINKS</h3>
        <div style={{ display: "grid", gap: "0.4rem" }}>
          <a target="_blank" rel="noopener noreferrer" href={urls.sushiUSDCBCT}>
            🍣 SushiSwap BCT/USDC
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={urls.sushiKLIMABCT}
          >
            🍣 SushiSwap BLOOM/BCT
          </a>
          <a target="_blank" rel="noopener noreferrer" href={urls.communityHub}>
            👨‍👩‍👧‍👧 Community Hub (tutorials & more)
          </a>
          <a target="_blank" rel="noopener noreferrer" href={urls.officialDocs}>
            📚 Official Docs
          </a>
        </div>
      </div>
    </div>
  );
};
