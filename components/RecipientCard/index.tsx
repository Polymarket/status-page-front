import TimeAgo from "react-timeago";
import styles from "./RecipientCard.module.scss";
import StatusPill from "../StatusPill";

interface RecipientCardProps {
    title: string;
    address: string;
    balance: string;
    lastUpdated: Date;
}

const RecipientCard = ({
    title,
    address,
    balance,
    lastUpdated,
}: RecipientCardProps): JSX.Element => {
    return (
        <div className={styles.relayerCard}>
            <div className={styles.head}>
                <span>{title}</span>
                <span className={styles.address}>{address}</span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
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
                </div>
            </div>
        </div>
    );
};

export default RecipientCard;
