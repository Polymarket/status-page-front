import TimeAgo from "react-timeago";
import styles from "./RelayerCard.module.scss";
import StatusPill from "../StatusPill";

interface RelayerCardProps {
    title: string;
    address: string;
    balance: string;
    status: "Ready" | "Error";
    lastUpdated: Date;
}

const RelayerCard = ({
    title,
    address,
    balance,
    status,
    lastUpdated,
}: RelayerCardProps): JSX.Element => {
    return (
        <div className={styles.relayerCard}>
            <div className={styles.head}>
                <span>Relayer</span>
                <span className={styles.address}>{address}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <span>{title}</span>
                    {lastUpdated && (
                        <small>
                            Updated:{" "}
                            <TimeAgo
                                date={new Date(new Date().getTime() - 1000)} // weird fix, but it works
                            />
                        </small>
                    )}
                </div>
                <div className={styles.right}>
                    <span>{balance}</span>
                    <StatusPill status={status ? "Ready" : "Error"} />
                </div>
            </div>
        </div>
    );
};

export default RelayerCard;
