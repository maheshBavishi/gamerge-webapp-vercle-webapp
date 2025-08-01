'use client'
import React from 'react'
import styles from './moreFromGamerge.module.scss';
import Slider from "react-slick";
import LeftIcon from '@/components/icons/leftIcon';
import classNames from 'classnames';
import { motion } from 'framer-motion';
const BlogImage = '/assets/images/blog.png';
const BlogOne = '/assets/images/blog1.png';
const BlogThree = '/assets/images/blog3.png';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={classNames(styles.sliderArrow, styles.rightIcon)}
            onClick={onClick}
        >
            <LeftIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={classNames(styles.sliderArrow, styles.leftIcon)}
            onClick={onClick}
        >
            <LeftIcon />
        </div>
    );

}
export default function MoreFromGamerge() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };

    // Animation variants for the title
    const headingContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };
    const headingWord = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const headingText = 'more from gamerge';
    const headingWords = headingText.split(' ');

    return (
        <>
            <div className={styles.moreFromGamerge}>
                <div className={styles.line}></div>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}></div>
                <div className='container-md'>
                    <div className={styles.title}>
                        <motion.h2
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5ch' }}
                            variants={headingContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                        >
                            {headingWords.map((word, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={headingWord}
                                    style={{ display: 'inline-block' }}
                                >
                                    {word === 'gamerge' ? <span>{word}</span> : word}
                                </motion.div>
                            ))}
                        </motion.h2>
                    </div>
                    <div className={styles.sliderBottomAlignment}>
                        <Slider {...settings}>
                            <div>
                                <div className={styles.blogCard}>
                                    <div className={styles.image}>
                                        <img src={BlogOne} alt='BlogOne' />
                                    </div>
                                    <div className={styles.details}>
                                        <h3>
                                            This is just another blog title for example. How crypto works.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.blogCard}>
                                    <div className={styles.image}>
                                        <img src={BlogImage} alt='BlogImage' />
                                    </div>
                                    <div className={styles.details}>
                                        <h3>
                                            This is just another blog title for example. How crypto works.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.blogCard}>
                                    <div className={styles.image}>
                                        <img src={BlogThree} alt='BlogThree' />
                                    </div>
                                    <div className={styles.details}>
                                        <h3>
                                            This is just another blog title for example. How crypto works.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={styles.linebottom}></div>
                <div className={styles.leftSidebottom}></div>
                <div className={styles.rightSidebottom}></div>

            </div>
            <div className={styles.topSpacing}></div>
        </>
    )
}
