import useSWR from "swr";
import RelayerCard from "../components/RelayerCard";
import RecipientCard from "../components/RecipientCard";
import StatusCard from "../components/StatusCard";

import styles from "../styles/Status.module.scss";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Status = (): JSX.Element => {
    const { data, error } = useSWR(
      "https://polymarket-redis-status.herokuapp.com/",
        fetcher,
        {
            refreshInterval: 60 * 1000,
        },
    );

    if (!data) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error loading...</p>;
    }

    return (
        <section className={styles.container}>
            <img
                src="polymarket.svg"
                alt="Polymarket"
                className={styles.logo}
            />
            <h1>Mainnet Relayer (Deposits & Withdrawals)</h1>
            <RecipientCard
                title="Mainnet Recipient"
                link={`https://gsn-site.vercel.app/recipients/${data.mainnet.address}`}
                lastUpdated={data.mainnet.lastUpdated}
                address={data.mainnet.address}
                balance={data.mainnet.recipientBalance}
            />
            {data?.mainnet.relayers.map((relayer) => (
                <RelayerCard
                    key={relayer.address}
                    title="Balance"
                    lastUpdated={data.mainnet.lastUpdated}
                    link={`https://etherscan.io/address/${relayer.address}`}
                    address={relayer.address}
                    balance={relayer.balance}
                    status={relayer.isReady}
                />
            ))}

            <h1>Matic Relayer (Trading/Liquidity)</h1>
            <RecipientCard
                title="Matic Recipient"
                link={`https://gsn-site.vercel.app/recipients/${data.matic.address}`}
                lastUpdated={data.matic.lastUpdated}
                address={data.matic.address}
                balance={data.matic.recipientBalance}
            />
            {data?.matic.relayers.map((relayer) => (
                <RelayerCard
                    key={relayer.address}
                    title="Balance"
                    address={relayer.address}
                    link={`https://explorer-mainnet.maticvigil.com/address/${relayer.address}`}
                    balance={relayer.balance}
                    status={relayer.isReady}
                    lastUpdated={data.matic.lastUpdated}
                />
            ))}
                    <h1>Matic V2 Relayers (Trading/Liquidity)</h1>

            {data?.matic.v2Relayers.map((v2Relayer) => (
                <RelayerCard
                    key={v2Relayer.address}
                    title="Balance"
                    address={v2Relayer.address}
                    link={`https://explorer-mainnet.maticvigil.com/address/${v2Relayer.address}`}
                    balance={v2Relayer.balance}
                    status={v2Relayer.isReady}
                    lastUpdated={data.matic.lastUpdated}
                />
            ))}
            <h1>Matic RPC (onChain Shares, Trading)</h1>
            <StatusCard
                title="RPC Matic (onChain Shares, Trading)"
                block={data.blockVigil.block}
                lastUpdated={data.blockVigil.lastUpdated}
                status={data.blockVigil.status}
            />
        </section>
    );
};

export default Status;
