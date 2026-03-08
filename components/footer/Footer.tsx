import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.top}>

                    <div className={styles.brand}>
                        <h2>MNTN</h2>
                        <p>
                            Get out there & discover your next slope, mountain & destination!
                        </p>
                    </div>

                    <div className={styles.links}>

                        <div>
                            <h4>More on The Blog</h4>
                            <ul>
                                <li><a href="#">About MNTN</a></li>
                                <li><a href="#">Contributors & Writers</a></li>
                                <li><a href="#">Write For Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>More on MNTN</h4>
                            <ul>
                                <li><a href="#">The Team</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className={styles.bottom}>
                    <p>Copyright 2026 MNTN, Inc. Terms & Privacy</p>
                </div>

            </div>
        </footer>
    );
}