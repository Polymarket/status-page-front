import styles from "./StatusPill.module.scss";

interface StatusPillProps {
    status: "Ready" | "Error";
}

const StatusPill = ({ status }: StatusPillProps): JSX.Element => {
    return (
        <div
            className={`${styles.statusPill} ${
                status === "Ready" ? styles.ready : styles.error
            }`}
        >
            {status}
        </div>
    );
};

export default StatusPill;
