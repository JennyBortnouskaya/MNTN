import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2>MNTN</h2>
                        <p>Explore the mountains with us</p>
                    </div>
                    <div className={styles.links}>
                        <div>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Guides</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© 2026 MNTN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}