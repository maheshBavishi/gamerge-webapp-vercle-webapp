import React from 'react'
import styles from './fillOutApplication.module.scss';
import Button from '@/components/button';
export default function FillOutApplication() {
    return (
        <div className={styles.fillOutApplication}>
            <div className='container-md'>
                <div className={styles.box}>
                    <div className={styles.text}>
                        <span>APPLY NOW</span>
                        <h2>Fill out Application.</h2>
                        <p>
                            Make sure to enter your Details correctly
                        </p>
                    </div>
                    <div className={styles.twoCol}>
                        <div className={styles.input}>
                            <label>Full Name*</label>
                            <input type='text' placeholder='ex. John Smith' />
                        </div>
                        <div className={styles.input}>
                            <label>Email*</label>
                            <input type='text' placeholder='ex. company@company.com' />
                        </div>
                    </div>
                    <div className={styles.threeCol}>
                        <div className={styles.input}>
                            <label>Country</label>
                            <input type='text' placeholder='Select country' />
                        </div>
                        <div className={styles.input}>
                            <label>Telegram ID*</label>
                            <input type='text' placeholder='xxx-xxx-xx-x' />
                        </div>
                        <div className={styles.input}>
                            <label>X (formerly Twitter)*</label>
                            <input type='text' placeholder='Instagram Username' />
                        </div>
                        <div className={styles.input}>
                            <label>Facebook</label>
                            <input type='text' placeholder='Your Facebook Profile Link' />
                        </div>
                        <div className={styles.input}>
                            <label>Instagram</label>
                            <input type='text' placeholder='Instagram Username' />
                        </div>
                        <div className={styles.input}>
                            <label>Linkedin</label>
                            <input type='text' placeholder='Linkedin Profile Link' />
                        </div>
                    </div>
                    <div className={styles.input}>
                        <label>About you</label>
                        <textarea placeholder='Type here'></textarea>
                    </div>
                    <div className={styles.buttonAlignment}>
                        <Button text="Clear Form" fillwhite/>
                        <Button text="Submit" fillwhite/>
                    </div>
                </div>
            </div>
        </div>
    )
}
