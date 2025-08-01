'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import styles from './exploreGamerges.module.scss';
import DownIcon from '@/components/icons/downIcon';
import Button from '@/components/button';

export default function ExploreGamerges() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                when: 'beforeChildren',
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className={styles.exploreGamerges}
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <div className='container-md'>
                <motion.div className={styles.iconAlignment} variants={itemVariants}>
                    <DownIcon />
                </motion.div>
                <motion.div className={styles.title} variants={itemVariants}>
                    <h2>
                        Explore Gamerge’s various pricing packages.
                    </h2>
                    <p>
                        Come with the Flexibility to choose plan according to your needs - Tailored just
                        for you!
                    </p>
                </motion.div>
                <motion.div className={styles.planHeader} variants={containerVariants}>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <DownIcon />
                        <h3>Basic Plan</h3>
                        <h4> $500/month</h4>
                    </motion.div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <DownIcon />
                        <h3>advanced plan</h3>
                        <h4>$1,000/month</h4>
                    </motion.div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <DownIcon />
                        <h3>PRO Plan</h3>
                        <h4>$2,000/month</h4>
                    </motion.div>
                </motion.div>
                <motion.div className={styles.planBody} variants={containerVariants}>
                    <div className={styles.mobileplanHeader}>
                        <DownIcon />
                        <h3>Basic Plan</h3>
                        <h4> $500/month</h4>
                    </div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.alignment}>
                            <p>
                                Setup & Announcements:
                            </p>
                            <ul>
                                <li>2 Announcements: Pre-listing and at the time of listing.</li>
                            </ul>
                            <p>
                                Social Media Exposure:
                            </p>
                            <ul>
                                <li>Gamerge Telegram announcement.</li>
                                <li>Gamerge Twitter announcement.</li>
                                <li>Shoutout on Gamerge's all social media handles</li>
                                <li>1 post on Gamerge CMC, CG and other pages</li>
                            </ul>
                            <p>
                                In-App Promotion:
                            </p>
                            <ul>
                                <li>Popup banner in the Gamerge app.</li>
                                <li>In app banner</li>
                                <li>
                                    Notification to all community
                                </li>
                            </ul>
                            <p>
                                * Content Marketing:
                            </p>
                            <ul>
                                <li>1 Article published on our platform.</li>
                                <li>Access to 1 admin panel</li>
                                <li>Upto 4 tournaments every month</li>
                            </ul>
                        </div>
                        <div className={styles.buttonAlignment}>
                            <Button text="Contact Sales" />
                        </div>
                    </motion.div>
                    <div className={styles.mobileplanHeader}>
                        <DownIcon />
                        <h3>advanced plan</h3>
                        <h4>$1,000/month</h4>
                    </div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.alignment}>
                            <p>
                                Setup & Announcements:
                            </p>
                            <ul>
                                <li>2 Announcements: Pre-listing and at the time of listing.</li>
                            </ul>
                            <p>
                                Social Media Exposure:
                            </p>
                            <ul>
                                <li>Gamerge Telegram announcement.</li>
                                <li>Gamerge Twitter announcement.</li>
                                <li>Shoutout on Gamerge's all social media handles</li>
                                <li>1 post on Gamerge CMC, CG and other pages</li>
                            </ul>
                            <p>
                                In-App Promotion:
                            </p>
                            <ul>
                                <li>Popup banner in the Gamerge app.</li>
                                <li>In app bannner</li>
                                <li>Notification to all community</li>
                            </ul>
                            <p>
                                Content Marketing:
                            </p>
                            <ul>
                                <li>1 Article published on our platform.</li>
                                <li>Access to 2 admin panel</li>
                                <li>Upto 8 tournaments every month</li>
                                <li>AMA on X</li>
                            </ul>
                        </div>
                        <div className={styles.buttonAlignment}>
                            <Button text="Contact Sales" />
                        </div>
                    </motion.div>
                    <div className={styles.mobileplanHeader}>
                        <DownIcon />
                        <h3>PRO Plan</h3>
                        <h4>$2,000/month</h4>
                    </div>
                    <motion.div className={styles.items} variants={itemVariants}>
                        <div className={styles.alignment}>
                            <p>
                                Setup & Announcements:
                            </p>
                            <ul>
                                <li> 2 Announcements: Pre-listing and at the time of listing.</li>
                            </ul>
                            <p>
                                Social Media Exposure:
                            </p>
                            <ul>
                                <li>Gamerge Telegram announcement.</li>
                                <li>Gamerge Twitter announcement.</li>
                                <li>Shoutout on Gamerge's all social media handles</li>
                                <li>1 post on Gamerge CMC, CG and other pages</li>
                            </ul>
                            <p>
                                In-App Promotion:
                            </p>
                            <ul>
                                <li>Popup banner in the Gamerge app.</li>
                                <li>In app bannner</li>
                                <li>Notification to all community</li>
                            </ul>
                            <p>
                                Content Marketing:
                            </p>
                            <ul>
                                <li>1 Article published on our platform.</li>
                            </ul>
                            <p>
                                Airdrop Campaigns:
                            </p>
                            <ul>
                                <li>Token airdrop campaigns to incentivize user engagement.</li>
                                <li>AMA on X & TG</li>
                                <li>Special tournament sponsorship</li>
                                <li>Visibility in Gameplay</li>
                                <li>Special visibility on Flappy fox, bull run etc gameplay screen
                                </li>
                                <li>Token symbol visibility in Crypto Ninja
                                </li>
                                <li>Access to 5 admin panels
                                </li>
                                <li>Upto 12 tournaments every month
                                </li>
                                <li>Access to schedule the tournament
                                </li>
                            </ul>
                        </div>
                        <div className={styles.buttonAlignment}>
                            <Button text="Contact Sales" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    )
}
