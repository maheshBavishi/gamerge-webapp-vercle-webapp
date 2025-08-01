import React from 'react'
import styles from './footer.module.scss';
import LearnIcon from '../icons/learnIcon';
import PowerOnIcon from '../icons/powerOnIcon';
import LinkIcon from '../icons/linkIcon';
import ShareIcon from '../icons/shareIcon';
import TelegramIcon from '../icons/telegramIcon';
import TwitterIcon from '../icons/twitterIcon';
import LinkTreeIcon from '../icons/linkTreeIcon';
import InstagramIcon from '../icons/instagramIcon';
import Link from 'next/link';
export default function Footer() {
    return (
        <div className={styles.footerSpacing}>
            <div className='container-md'>
                <footer className={styles.footer}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <div className={styles.line}></div>
                            <div className={styles.iconText}>
                                <LearnIcon />
                                <h3>LEARN</h3>
                            </div>
                            <a target='_blank' aria-label='whitepaper' href="https://whitepaper.gamerge.ai/">
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Whitepaper</span>
                                </div>
                            </a>
                            <a target='_blank' aria-label='pitch-deck' href="https://gamerge.ai/pitch-deck.pdf">
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Pitch Deck</span>
                                </div>
                            </a>
                            <Link href="/blog">
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Blog</span>
                                </div>
                            </Link>
                            <div className={styles.dotText}>
                                <div className={styles.dot}></div>
                                <span>Medium</span>
                            </div>
                            <a aria-label='gamergeaicommunity' href="https://t.me/gamergeaicommunity" target='_blank'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Ask Community</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.griditems}>
                             <div className={styles.line}></div>
                            <div className={styles.iconText}>
                                <PowerOnIcon />
                                <h3>PARTICIPATE</h3>
                            </div>
                            <div className={styles.dotText}>
                                <div className={styles.dot}></div>
                                <span>Presale</span>
                            </div>
                            <a href="/https://sweepwidget.com/c/86895-oiy9dkpt" aria-label='Become a Ambassador'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Claim Airdrop</span>
                                </div>
                            </a>
                            <Link href="/ambassador-program" aria-label='ambassador-program'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Become a Ambassador</span>
                                </div>
                            </Link>
                            <Link href="/list-your-token" aria-label='list-your-token'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>List Your Token</span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.griditems}>
                             <div className={styles.line}></div>
                            <div className={styles.iconText}>
                                <LinkIcon />
                                <h3>LINKS</h3>
                            </div>
                            <Link href="/privacy-policy" aria-label='privacy-policy'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Privacy Policy</span>
                                </div>
                            </Link>
                            <Link href="/cookies-policy" aria-label='cookies-policy'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Cookies Policy</span>
                                </div>
                            </Link>
                            <Link href="/customer-agreement" aria-label='customer-agreement'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Customer Agreement</span>
                                </div>
                            </Link>
                            <Link href="/risk-disclosure" aria-label='risk-disclosure'>
                                <div className={styles.dotText}>
                                    <div className={styles.dot}></div>
                                    <span>Risk Disclosure</span>
                                </div>
                            </Link>
                            <div className={styles.dotText}>
                                <div className={styles.dot}></div>
                                <span>Anti Money Laundering</span>
                            </div>
                        </div>
                        <div className={styles.griditems}>
                             <div className={styles.line}></div>
                            <div className={styles.iconText}>
                                <ShareIcon />
                                <h3>SOCIALS</h3>
                            </div>
                            <a aria-label='gamergeai' href="https://t.me/gamergeai" target='_blank'>
                                <div className={styles.dotText}>
                                    <TelegramIcon />
                                    <div className={styles.dot}></div>
                                    <span>Telegram</span>
                                </div>
                            </a>
                            <a aria-label='x.com' href="https://x.com/Gamergeai" target='_blank'>
                                <div className={styles.dotText}>
                                    <TwitterIcon />
                                    <div className={styles.dot}></div>
                                    <span>(Formerly Twitter)</span>
                                </div>
                            </a>
                            <a aria-label='linktr' href="https://linktr.ee/gamergeai" target='_blank'>
                                <div className={styles.dotText}>
                                    <LinkTreeIcon />
                                    <div className={styles.dot}></div>
                                    <span>Linktree</span>
                                </div>
                            </a>
                            <a aria-label='instagram' href="https://www.instagram.com/gamerge.ai/" target='_blank'>
                                <div className={styles.dotText}>
                                    <InstagramIcon />
                                    <div className={styles.dot}></div>
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.textCenter}>
                        <h3>GAMERGE</h3>
                    </div>
                    <div className={styles.bgbottom}></div>
                </footer>
            </div>
        </div>
    )
}
