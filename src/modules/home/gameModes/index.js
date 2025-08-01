'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './gameModes.module.scss';
import DownIcon from '@/components/icons/downIcon';
const CardImage = '/assets/images/card-img.png';
const CardImage2 = '/assets/images/games2.png';
const CardImage3 = '/assets/images/games3.png';
const MangoIcon = '/assets/icons/mango.png';
const cardData = [
    {
        title: "Free Practice Mode",
        image: CardImage, // Or use different images if needed
        points: [
            "Practice and sharpen skills.",
            "Win in-game points & stack them in the Loot Vault.",
            "Encash loot points in regular airdrops.",
        ],
    },
    {
        title: "1v1 Competitive Mode",
        image: CardImage2,
        points: [
            "Stake cryptos & compete.",
            "Winner takes 90% of the pool.",
            "5% each goes to referrals and company.",
        ],
    },
    {
        title: "Tournament Mode",
        image: CardImage3,
        points: [
            "Compete in large-scale tournaments.",
            "Winner can earn up to 25x rewards.",
            "25 lucky players receive exclusive rewards.",
        ],
    },
];
// Animation variants
const titleVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const cardContainerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function GameModes() {
    return (
        <div className={styles.gameModesWrapper}>
            <div className={styles.secwrapper}></div>
            <div className={styles.line}></div>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}></div>
            <div className='container-md'>
                <motion.div
                    className={styles.titleIconAlignment}
                    variants={titleVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <DownIcon />
                    <h2>
                        Exciting game modes
                    </h2>
                </motion.div>
                <div className={styles.relativeDiv}>
                    <div className={styles.iconsAlignment}>
                        <img src={MangoIcon} alt='MangoIcon' />
                    </div>
                    <motion.div
                        className={styles.grid}
                        variants={cardContainerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {cardData.map((card, idx) => (
                            <motion.div
                                onMouseMove={(e) => {
                                    const card = e.currentTarget;
                                    const image = card.querySelector(`.${styles.cardImage}`);
                                    const rect = card.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const xPos = x / rect.width;
                                    const yPos = y / rect.height;
                                    const rotateY = (xPos - 0.5) * 20;
                                    const rotateX = (0.5 - yPos) * 20;

                                    // Card tilt
                                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                    card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';

                                    // Image parallax movement
                                    if (image) {
                                        const translateX = (xPos - 0.5) * 20; // adjust strength
                                        const translateY = (yPos - 0.5) * 20;
                                        image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const card = e.currentTarget;
                                    const image = card.querySelector(`.${styles.cardImage}`);

                                    // Reset card
                                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                                    card.style.boxShadow = 'none';

                                    // Reset image
                                    if (image) {
                                        image.style.transform = 'translate(0px, 0px) scale(1)';
                                    }
                                }}
                                className={styles.griditems}
                                key={idx}
                                variants={cardVariant}
                            >
                                <div className={styles.card}>
                                    <div className={styles.cardImage}>
                                        <img src={card.image} alt='CardImage' />
                                    </div>
                                    <div className={styles.greenBox}>
                                        <h3>{card.title}</h3>
                                    </div>
                                    <div className={styles.content}>
                                        <ul>
                                            {card.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className={styles.linebottom}></div>
            <div className={styles.leftSidebottom}></div>
            <div className={styles.rightSidebottom}></div>
        </div>
    )
}
