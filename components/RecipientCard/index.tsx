import TimeAgo from "react-timeago";
import AddressLink from "../AddressLink";
import styles from "./RecipientCard.module.scss";

interface RecipientCardProps {
    title: string;
    address: string;
    link: string;
    balance: string;
    lastUpdated: Date;
}

const RecipientCard = ({
    title,
    address,
    link,
    balance,
    lastUpdated,
}: RecipientCardProps): JSX.Element => {
    return (
        <div className={styles.relayerCard}>
            <div className={styles.head}>
                <span>{title}</span>
                <span className={styles.address}>
                    <AddressLink link={link} address={address} />
                </span>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <span>Balance</span>
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
                    <span
                        className={parseFloat(balance) < 0.2 ? styles.red : ""}
                    >
                        {balance}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RecipientCard;
