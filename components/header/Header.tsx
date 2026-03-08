'use client'

import styles from './Header.module.scss'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">

                <div className={styles.inner}>

                    <div className={styles.logo}>
                        MNTN
                    </div>

                    <nav className={styles.nav}>
                        <a href="#">Equipment</a>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                    </nav>

                    <div className={styles.account}>
                        <AccountCircleOutlinedIcon className={styles.icon} />
                        <span>Account</span>
                    </div>

                </div>

            </div>
        </header>
    )
}