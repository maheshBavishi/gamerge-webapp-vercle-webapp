'use client'
import React, { useRef } from 'react'
import styles from './whychooseB2b.module.scss';
const PosterImage = '/assets/images/primary-poster.png';
const CommunityImage = '/assets/images/Community.png';
const CostImage = '/assets/images/Cost.png';
import DownIcon from '@/components/icons/downIcon';
import { motion, useInView, useAnimation } from 'framer-motion';

export const cardsData = [
    {
        image: PosterImage,
        title: 'Plug & Play Integration',
        alt:'Crypto Gaming',
        description:
            'Go live in 24 hours—supporting multichain, multicurrency tokens with zero hassle.',
    },
    {
        image: CostImage,
        title: 'Low Cost, High Speed',
        alt:'Buy GMG Tokens',
        description:
            'Launch your token with minimal fees and zero development delays.',
    },
    {
        image: CommunityImage,
        title: 'Built-In Community Access',
        alt:'Refer And Earn',
        description:
            'Skip the grind. Instantly tap into Gamerge’s thriving global player base.',
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function WhychooseB2b() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className={styles.whychooseB2bAlignment}
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
        >
            <div className='container-md'>
                <div className={styles.iconCenter}>
                    <DownIcon />
                </div>
                <div className={styles.title}>
                    <h2>
                        Why Choose Gamerge
                        for Your Project?
                    </h2>
                </div>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.griditems}
                            variants={itemVariants}
                            onMouseMove={(e) => {
                                const cardElement = e.currentTarget;
                                const image = cardElement.querySelector(`.${styles.image}`);
                                const rect = cardElement.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const xPos = x / rect.width;
                                const yPos = y / rect.height;
                                const rotateY = (xPos - 0.5) * 20;
                                const rotateX = (0.5 - yPos) * 20;

                                cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                cardElement.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';

                                if (image) {
                                    const translateX = (xPos - 0.5) * 30;
                                    const translateY = (yPos - 0.5) * 30;
                                    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                const cardElement = e.currentTarget;
                                const image = cardElement.querySelector(`.${styles.image}`);
                                cardElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                                cardElement.style.boxShadow = 'none';

                                if (image) {
                                    image.style.transform = 'translate(0px, 0px) scale(1)';
                                }
                            }}
                        >
                            <div className={styles.image}>
                                <img
                                    className={styles.cardImage}
                                    src={card.image}
                                    alt={card.alt}
                                />
                            </div>
                            <div className={styles.details}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}
