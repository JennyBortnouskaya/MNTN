import styles from "./RightSidebar.module.scss";

export default function RightSidebar() {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={styles.active}>Start</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
            </ul>
        </div>
    );
}