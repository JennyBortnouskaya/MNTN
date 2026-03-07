import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.brand}>
                    <h3>MNTN</h3>
                    <p>
                        Get out there & discover your next slope, mountain & destination!
                    </p>
                    <span className={styles.copyright}>
            Copyright 2024 MNTN, Inc.
          </span>
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
        </footer>
    );
}