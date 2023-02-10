import Image from 'next/image'
import global from '@/styles/Global.module.scss'
import styles from '@/styles/Footer.module.scss'

export default function Footer() {
    return (
        <div className={ styles["footer"] }>
            <div className={global["wrapper"] }>
                <footer>
                    <div className={styles["footer-wrapper"] }>
                        <div className={styles["logo-container"] }>
                            <div className={styles["logo"] }>
                                <img src="/img/footer-logo.svg" alt="" />
                            </div>
                            <div className={styles["mail-link"] }><a href="mailto:hello@teammumbai.com">hello@teammumbai.com</a></div>
                        </div>
                        <div className={styles["social-links"] }>
                            <ul className={styles["links"] }>
                                {/* <li><img src="img/fb.svg" alt="" /></li>*/}
                                <li><a href="https://twitter.com/mumbai_tech_/" target="_blank"  rel='noreferrer'><img src="/img/tw.svg" alt="" /></a></li>
                                <li><a href="https://www.instagram.com/mumbai_tech_/" target="_blank"  rel='noreferrer'><img src="/img/in.svg" alt="" /></a></li>
                                <li><a href="https://www.linkedin.com/company/mumbaitech/" target="_blank"  rel='noreferrer'><img src="/img/li.svg" alt="" /></a></li>
                            </ul>
                            <div className={styles["with-love"] }>
                                Made with <span className={styles["heartbeat"] }><img src="/img/heart.svg" alt="" /></span> in Bombay
                            </div>
                        </div>
                    </div>
                    <div className={styles["by-founders"] }>
                        By the founders, for the founders.
                    </div>
                </footer>
            </div>
        </div>
    )
}
