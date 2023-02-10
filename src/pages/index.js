import Head from 'next/head'
import Image from 'next/image'

import Nav from '/public/components/nav'
import Footer from '/public/components/footer'
import global from '@/styles/Global.module.scss'
import styles from '@/styles/Home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Team Mumbai</title>
                <meta name="description" content="Tech Startup Ecosystem Of Mumbai. Representing The City's Leading Technology Companies With A Combined Market Valuation Of More Than $50 Billion." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta property="og:title" content="T.E.A.M - Tech Entrepreneurs Association of Mumbai. " />
                <meta property="og:description" content="Tech Startup Ecosystem Of Mumbai. Representing The City's Leading Technology Companies With A Combined Market Valuation Of More Than $50 Billion." />
                <meta property="og:image" content="http://mumbaitech.team/img/seo.png" />
                <meta property="og:url" content="http://mumbaitech.team/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:site" content="@mumbai_tech_" />
                <meta name="twitter:title" content="T.E.A.M - Tech Entrepreneurs Association of Mumbai. " />
                <meta name="twitter:description" content="Tech Startup Ecosystem Of Mumbai. Representing The City's Leading Technology Companies With A Combined Market Valuation Of More Than $50 Billion." />
                <meta name="twitter:image" content="/http://mumbaitech.team/img/seo.png" />
            </Head>
            <Nav />
            <div className={ styles["body-container"] }>
                <div className={`${ styles["hero"] } ${ global["full-stretch"] }`}>
                    <div className={ styles["hero-img-container"] }>
                        <div className={ styles["bg-img-1"] }>
                            <picture>
                                <source media="(max-width:1024px)" srcset="img/Homepage_bg-2-mobile.png" />
                                <img src="img/Homepage_bg-2.webp" alt="" />
                            </picture>
                        </div>
                        <div className={`${ global["wrapper"] } ${ styles["wrapper"] }`}>
                            <div className={ styles["banner-container"] }>
                                <div className={ styles["title"] }>Upcoming event</div>
                                <div className={ styles["banner"] }>
                                    <a target="_blank" rel='noreferrer' href="//yourstory.com/techsparks-mumbai"><img src="//pbs.twimg.com/media/Fm5hX9laMAArqym?format=jpg&name=large" alt="" /></a>
                                </div>
                            </div>
                            <div className={ styles["hero-wrapper"] }>
                                <div className={ styles["h1-wrapper"] }>
                                    <h1 className={ styles["wow fadeInUp"] }>Tech Entrepreneurs association of Mumbai</h1>
                                </div>
                                <div className={ styles["h1-sub-text wow fadeInUp"] }>is a non-profit, independent industry body formed with the mission of advancing the tech startup ecosystem of Mumbai. We represent the city`s leading technology companies with a combined market valuation of more than $50 billion.</div>
                                <div className={ styles["abt-logos"] }>
                                    <img src="img/about.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${ styles["about-sec"] } ${ global["full-stretch"] }`} id="about">
                    <div className={ global["wrapper"] }>
                        <div className={ styles["bg-img-1"] }>
                            <img src="img/aboutus2_bg-2.webp" alt="" />
                        </div>
                        <div className={ styles["steps"] } id="what">
                            <div className={ styles["step"] }>
                                <div className={ styles["icon"] }>
                                    <img src="img/step-1.svg" alt="" />
                                </div>
                                <div className={ styles["text"] }>
                                    Expand Mumbai entrepreneurial ecosystem to the next level
                                </div>
                            </div>
                            <div className={ styles["step"] }>
                                <div className={ styles["icon"] }>
                                    <img src="img/step-3.svg" alt="" />
                                </div>
                                <div className={ styles["text"] }>
                                    Scale the thriving Mumbai based community of technology professionals, founders and investors
                                </div>
                            </div>
                            <div className={ styles["step"] }>
                                <div className={ styles["icon"] }>
                                    <img src="img/step-2.svg" alt="" />
                                </div>
                                <div className={ styles["text"] }>
                                    Collaborate with the government to promote and enhance startup infrastructure and policies
                                </div>
                            </div>
                        </div>
                        <div className={ styles["economy"] }>
                            <h2>Making the Country a $5 Trillion Economy.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
