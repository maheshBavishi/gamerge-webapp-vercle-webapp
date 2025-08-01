import React from 'react'
import styles from './typographyStyleguide.module.scss';
import classNames from 'classnames';
export default function TypographyStyleguide() {
    return (
        <div className={styles.typographyStyleguide}>
            <div className={styles.seclayer}></div>
            <div className='container-xs3'>
                <div className={styles.title}>
                    <h2>
                        typography
                    </h2>
                </div>
                <div className={styles.primaryFont}>
                    <h3>Unbounded</h3>
                </div>
                <div className={styles.textgrid}>
                    <div className={styles.textRelative}>
                        <h4>
                            Aa
                        </h4>
                        <div className={styles.topAlignment}>
                            <h5>AaBbCc</h5>
                            <h6>Semibold</h6>
                        </div>
                    </div>
                    <div className={styles.listText}>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            {`123456789!@#$%^&*()_+{}:”<>?~`}
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.primaryFont, styles.fontfamilyChange)}>
                    <h3>Poppins</h3>
                </div>
                <div className={ classNames(styles.textgrid , styles.regularFont) }>
                    <div className={styles.textRelative}>
                        <h4>
                            Aa
                        </h4>
                        <div className={styles.topAlignment}>
                            <h5>AaBbCc</h5>
                            <h6>Regular</h6>
                        </div>
                    </div>
                    <div className={styles.listText}>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            {`123456789!@#$%^&*()_+{}:”<>?~`}
                        </p>
                    </div>
                </div>
                <div className={ classNames(styles.textgrid , styles.mediumFont) }>
                    <div className={styles.textRelative}>
                        <h4>
                            Aa
                        </h4>
                        <div className={styles.topAlignment}>
                            <h5>AaBbCc</h5>
                            <h6>Medium</h6>
                        </div>
                    </div>
                    <div className={styles.listText}>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            {`123456789!@#$%^&*()_+{}:”<>?~`}
                        </p>
                    </div>
                </div>
                <div className={ classNames(styles.textgrid , styles.boldFont) }>
                    <div className={styles.textRelative}>
                        <h4>
                            Aa
                        </h4>
                        <div className={styles.topAlignment}>
                            <h5>AaBbCc</h5>
                            <h6>Semibold</h6>
                        </div>
                    </div>
                    <div className={styles.listText}>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </p>
                        <p>
                            {`123456789!@#$%^&*()_+{}:”<>?~`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

