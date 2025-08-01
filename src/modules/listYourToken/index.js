import React from 'react'
import styles from './listYourToken.module.scss';
import classNames from 'classnames';
import Button from '@/components/button';
import DownloadApp from '@/components/downloadApp';
export default function ListYourToken() {
    return (
        <>
        <div className={styles.listYourToken}>
            <div className='container-md'>
                <div className={styles.box}>
                    <div className={styles.text}>
                        <span>APPLY NOW</span>
                        <h2>
                            Fill out Application.
                        </h2>
                        <p>
                            Make sure to enter your Details correctly
                        </p>
                    </div>
                    <div className={styles.threeCol}>
                        <div className={styles.input}>
                            <label>Project Name</label>
                            <input type='text' placeholder='Project Name' />
                        </div>
                        <div className={styles.input}>
                            <label>Project Website</label>
                            <input type='text' placeholder='www.demo.com' />
                        </div>
                        <div className={styles.input}>
                            <label>Email ID</label>
                            <input type='text' placeholder='company@company.com' />
                        </div>
                    </div>
                    <div className={styles.twoCol}>
                        <div className={styles.input}>
                            <label>Relationship with the Project</label>
                            <input type='text' placeholder='Relationship with the Project' />
                        </div>
                        <div className={styles.input}>
                            <label>Platform of Contract Address (Blockchain name)</label>
                            <input type='text' placeholder='Blockchain name' />
                        </div>
                        <div className={styles.input}>
                            <label>Block Explorer Link</label>
                            <input type='text' placeholder='Block Explorer Link' />
                        </div>
                        <div className={styles.input}>
                            <label>Project Ticker/Symbol (e.g. BTC, ETH, XRP, HOT)</label>
                            <input type='text' placeholder='Project Ticker/Symbol*' />
                        </div>
                        <div className={styles.input}>
                            <label>Cryptoasset Tags - Sector/Categories (e.g. Dapp, Utility, Gaming)</label>
                            <input type='text' placeholder='Cryptoasset Tags - Sector/Categories' />
                        </div>
                        <div className={styles.input}>
                            <label>One-liner description</label>
                            <input type='text' placeholder='One-liner description' />
                        </div>
                        <div className={classNames(styles.input, styles.oneColumn)}>
                            <label>One-liner description</label>
                            <input type='text' placeholder='One-liner description' />
                        </div>
                        <div className={classNames(styles.input, styles.oneColumn)}>
                            <label>Detailed Project Description</label>
                            <textarea placeholder='Detailed Project Description'></textarea>
                        </div>
                          <div className={classNames(styles.input, styles.oneColumn)}>
                            <label>Link to Logo (PNG, 200x200, Transparent Background)</label>
                            <input type='text' placeholder='Link to Logo' />
                        </div>
                        </div>
                        <div className={styles.threeCol}>
                        <div className={styles.input}>
                            <label>Twitter</label>
                            <input type='text' placeholder='Twitter' />
                        </div>
                        <div className={styles.input}>
                            <label>Telegram Channel/Group</label>
                            <input type='text' placeholder='Telegram Channel/Group' />
                        </div>
                        <div className={styles.input}>
                            <label>Facebook</label>
                            <input type='text' placeholder='Facebook' />
                        </div>
                        <div className={styles.input}>
                            <label>Instagram</label>
                            <input type='text' placeholder='Instagram' />
                        </div>
                        <div className={styles.input}>
                            <label>LinkedIn</label>
                            <input type='text' placeholder='LinkedIn' />
                        </div>
                        <div className={styles.input}>
                            <label>Reddit</label>
                            <input type='text' placeholder='Reddit' />
                        </div>
                        <div className={styles.input}>
                            <label>Discord</label>
                            <input type='text' placeholder='Discord' />
                        </div>
                        <div className={classNames(styles.input, styles.oneColumn)}>
                            <label>YouTube
                            </label>
                            <input type='text' placeholder='YouTube' />
                        </div>
                    </div>
                    <div className={styles.centerButton}>
                    <Button text="Submit"/>
                    </div>
                </div>
            </div>
        </div>
         <DownloadApp/>
        </>
    )
}
