import TimeAgo from "react-timeago";

import styles from "./StatusCard.module.scss";

interface StatusCardProps {
    title: string;
    status: number;
    lastUpdated: Date;
    block: string;
}

const StatusCard = ({
    title,
    status,
    lastUpdated,
    block,
}: StatusCardProps): JSX.Element => {
    return (
        <div className={styles.relayerCard}>
            <div className={styles.head}>
                <span>{title}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <p>
                        Status: <span>{status}</span>
                    </p>
                    {lastUpdated && (
                        <small>
                            Updated:{" "}
                            <TimeAgo
                                date={new Date(lastUpdated)} // weird fix, but it works
                            />
                        </small>
                    )}
                </div>
                <div className={styles.right}>
                    <p>
                        Lastest Block: <span>{block}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
