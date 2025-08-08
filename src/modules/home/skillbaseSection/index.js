"use client";
import React from "react";
import styles from "./skillbaseSection.module.scss";
import DownIcon from "@/components/icons/downIcon";
import Button from "@/components/button";
const CardImage = "/assets/images/card.png";
const CardImage2 = "/assets/images/card2.png";
const UnityImage = "/assets/images/unity.png";
const EarnImage = "/assets/images/earn.png";
const CryptoImage = "/assets/images/Crypto-img.png";
const GameImage = "/assets/images/game.png";
const DolorIcon = "/assets/icons/dolor.svg";
const SkillIcon = "/assets/icons/skill.svg";
const EarnIcon = "/assets/icons/earn.svg";
const GameIcon = "/assets/icons/game.svg";
const CryptoIcon = "/assets/icons/crypto.svg";
const UnityIcon = "/assets/icons/unity-icons.svg";
import Slider from "react-slick";
import CropIcon from "@/components/icons/cropIcon";
import { motion } from "framer-motion";
import LazyImage from "@/lazyImage";

const cardData = [
  {
    icon: SkillIcon,
    title: 'Hi-tech skill based games',
    description: 'Enjoy competitive, skill-driven games designed with advanced technology. Test your abilities and win rewards based on performance, not luck.',
    image: CardImage2,
    cropIcon: <CropIcon />,
    alt: 'GameFi platform',
  },
  {
    icon: DolorIcon,
    title: 'Fun-to-play-to-earn experience',
    description: 'Play entertaining games while earning crypto rewards. It’s gaming that’s both fun and financially rewarding.',
    image: CardImage,
    cropIcon: <CropIcon />,
    alt: 'Play To Earn Crypto Games',

  },
  {
    icon: UnityIcon,
    title: 'Built on Unity engine',
    description: 'Powered by the Unity engine for smooth, high-quality gameplay. Expect sharp graphics, fluid controls, and a seamless experience.',
    image: UnityImage,
    cropIcon: <CropIcon />,
    alt: 'Crypto Gaming Platform',
  },
  {
    icon: CryptoIcon,
    title: 'Multichain Crypto Compatibility',
    description: 'Supports multiple blockchains for flexible in-game payments and rewards. Play and earn with the crypto you already use and trust.',
    image: CryptoImage,
    cropIcon: <CropIcon />,
    alt: 'Blockchain Games',
  },
  {
    icon: GameIcon,
    title: 'Gaming utility to any crypto project',
    description: 'Easily integrate your token into our gaming ecosystem. Boost utility, community engagement, and token visibility.',
    image: GameImage,
    cropIcon: <CropIcon />,
    alt: 'GameFi Ecosystem',
  },
  {
    icon: EarnIcon,
    title: 'Exciting refer & earn program',
    description: 'Earn extra rewards by inviting friends to join and play. A simple way to grow your crypto while building a gaming community.',
    image: EarnImage,
    cropIcon: <CropIcon />,
    alt: 'Web3 Gaming',
  },


];

export default function SkillbaseSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
    touchThreshold: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        }
      },
    ]

  };
  return (
    <div className={styles.skillbaseSection}>
      <div className="container-md">
        <div className={styles.textStyle}>
          <div className={styles.iconcenter}>
            <DownIcon />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              Powering skill-based gaming with the strength of blockchain!
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.1 } },
              }}
            >
              With Gamerge, seamlessly integrate your token into high-tech
              <span> Web3
                games, </span>
              access an engaged community, and boost your project's
              credibility. Enter the <span >GameFi </span> space in just 1 day.
            </motion.p>
            <motion.div
              className={styles.btnCenterAlignment}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
              }}
            >
              <Button text="Learn More" fillwhite />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className={styles.leftContentAlignment}>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${styles.listedbox} `}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPos = x / rect.width;
                const yPos = y / rect.height;
                const rotateY = (xPos - 0.5) * 20;
                const rotateX = (0.5 - yPos) * 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                card.style.boxShadow = 'none';
              }}
            >
              <div className={styles.content}>
                <LazyImage
                  image={{
                    src: card.icon,
                    alt: `icon-${index}`,
                  }} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <div className={styles.image}>
                <LazyImage
                  image={{
                    src: card.image,
                    alt: card.alt,
                  }} />
                <div className={styles.cropStyle}>
                  {card.cropIcon}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
