import Image from 'next/image'
import Link from 'next/link';

import global from '@/styles/Global.module.scss'
import styles from '@/styles/Nav.module.scss'

export default function Nav() {

    return (
        <div className={ styles["fixed-nav"] }>
            <div className={ `${ global["wrapper"] } ${ styles["wrapper"] } ${ styles["nav-desktop"] }`}>
                <div className={ styles["logo"] }>
                    <Link href="/"><img src="img/footer-logo.svg" alt="" /></Link>
                </div>
                <div className={ styles["nav-list"] }>
                    <nav>
                        <ul>
                            <li><span className={ styles["nav-text"] }>Events</span></li>
                            <li data-scroll="what"><span className={ styles["nav-text"] }>What we do</span></li>
                            <li data-scroll="members"><span className={ styles["nav-text"] }>Founding Members</span></li>
                            <li><Link href="/contact"><span className={ styles["nav-text"] }>Contact Us</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={ styles["nav-mobile"] }>
                <div className={ styles["logo-sec"] }>
                <Link href="/"><img src="img/footer-logo.svg" alt="" /></Link>
                </div>
                <div className={ styles["hamburger-wrapper"] }>
                    <div className={ styles["hamburger"] } id="hamburger-1">
                        <span className={ styles["line"] }></span>
                        <span className={ styles["line"] }></span>
                        <span className={ styles["line"] }></span>
                    </div>
                </div>
                <div className={ styles["nav-mobile-list"] }>
                    <nav>
                        <ul>
                            <li>Events</li>
                            <li data-scroll="what">What we do</li>
                            <li data-scroll="members">Founding Members</li>
                            <li><Link href="/contact" className={ styles["btn"] }>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
