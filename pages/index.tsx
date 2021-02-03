import useSWR from "swr";
import RelayerCard from "../components/RelayerCard";
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
            {data?.mainnet.relayers.map((relayer) => (
                <RelayerCard
                    key={relayer.address}
                    title="Recipient Balance"
                    lastUpdated={data.mainnet.lastUpdated}
                    address={relayer.address}
                    balance={relayer.balance}
                    status={relayer.isReady}
                />
            ))}

            <h1>Matic Relayer (Trading/Liquidity)</h1>
            {data?.matic.relayers.map((relayer) => (
                <RelayerCard
                    key={relayer.address}
                    title="Balance"
                    address={relayer.address}
                    balance={relayer.balance}
                    status={relayer.isReady}
                    lastUpdated={data.matic.lastUpdated}
                />
            ))}

            <StatusCard
                title="RPC Matic (onChain Shares, Trading)"
                block={data.blockVigil.block}
                lastUpdated={data.blockVigil.lastUpdated}
                status={data.blockVigil.status}
            />

            <StatusCard
                title="theGraph (Porfolio Data)"
                block={data.subgraph.block}
                lastUpdated={data.subgraph.lastUpdated}
                status={data.subgraph.status}
            />
        </section>
    );
};

export default Status;
