'use client'
import React, { useRef, useState } from "react";
import styles from "./partners.module.scss";
import Marquee from "react-fast-marquee";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LazyImage from "@/lazyImage";
const SwipeIcon = "/assets/icons/swipe.svg";
const DreamCraftIcon = "/assets/icons/DreamCraft.svg";
const OrblerIcon = "/assets/icons/Orbler.svg";
const GliderGPTIcon = "/assets/icons/GliderGPT.svg";
const CollablyIcon = "/assets/icons/Collably.svg";
const AnyAltIcon = "/assets/icons/AnyAlt.svg";
const LandIcon = "/assets/icons/Land.svg";
const QstnIcon = "/assets/icons/seecoin.svg";
const QstnIcons = "/assets/icons/qsten-logo.svg";
const Swipe1Icon = "/assets/icons/Swipe1.svg";
const BitcoinIcon = "/assets/icons/bitcoin.png";


const marqueeItems = [
  {
    icon: SwipeIcon,
    label: "Swipe Quest",
    alt: "SwipeIcon",
  },
  {
    icon: DreamCraftIcon,
    label: "DreamCraft",
    alt: "DreamCraftIcon",
  },
  {
    icon: OrblerIcon,
    label: "Orbler",
    alt: "OrblerIcon",
  },
  {
    icon: GliderGPTIcon,
    label: "GliderGPT",
    alt: "GliderGPT",
  },
  {
    icon: CollablyIcon,
    label: "Collably Network",
    alt: "GliderGPT",
  },
  {
    icon: AnyAltIcon,
    label: "AnyAlt",
    alt: "AnyAltIcon",
  },
  {
    icon: LandIcon,
    label: "Crypto Land",
    alt: "LandIcon",
  },
  {
    icon: SwipeIcon,
    label: "Swipe Quest",
    alt: "SwipeIcon",
  },
  {
    icon: DreamCraftIcon,
    label: "DreamCraft",
    alt: "DreamCraftIcon",
  },
  {
    icon: OrblerIcon,
    label: "Orbler",
    alt: "OrblerIcon",
  },
  {
    icon: GliderGPTIcon,
    label: "GliderGPT",
    alt: "GliderGPT",
  },
  {
    icon: CollablyIcon,
    label: "Collably Network",
    alt: "GliderGPT",
  },
  {
    icon: AnyAltIcon,
    label: "AnyAlt",
    alt: "AnyAltIcon",
  },
  {
    icon: LandIcon,
    label: "Crypto Land",
    alt: "LandIcon",
  },
  // Add more items as needed
];
const marqueeItemsSec = [
  {
    icon: QstnIcon,
    alt: "SwipeIcon",
    label: "seecoin",
  },
  {
    icon: QstnIcons,
    alt: "QstnIcon",
    label: "qstn",
  },
  {
    icon: Swipe1Icon,
    alt: "Swipe1Icon",
    label: "Swipe Quest",
  },
  {
    icon: DreamCraftIcon,
    label: "DreamCraft",
    alt: "DreamCraftIcon",
  },
  {
    icon: OrblerIcon,
    label: "Orbler",
    alt: "OrblerIcon",
  },
  {
    icon: GliderGPTIcon,
    label: "GliderGPT",
    alt: "GliderGPT",
  },
  {
    icon: CollablyIcon,
    label: "Collably Network",
    alt: "GliderGPT",
  },
  {
    icon: AnyAltIcon,
    label: "AnyAlt",
    alt: "AnyAltIcon",
  },
  {
    icon: QstnIcon,
    alt: "SwipeIcon",
    label: "seecoin",
  },
  {
    icon: QstnIcons,
    alt: "QstnIcon",
    label: "qstn",
  },
  {
    icon: Swipe1Icon,
    alt: "Swipe1Icon",
    label: "Swipe Quest",
  },
  {
    icon: DreamCraftIcon,
    label: "DreamCraft",
    alt: "DreamCraftIcon",
  },
  {
    icon: OrblerIcon,
    label: "Orbler",
    alt: "OrblerIcon",
  },
  {
    icon: GliderGPTIcon,
    label: "GliderGPT",
    alt: "GliderGPT",
  },
  {
    icon: CollablyIcon,
    label: "Collably Network",
    alt: "GliderGPT",
  },
  {
    icon: AnyAltIcon,
    label: "AnyAlt",
    alt: "AnyAltIcon",
  },

];
export default function Partners() {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <div className={styles.partners}>
      <div className={styles.bitcoinIcon}>
        <img src={BitcoinIcon} alt="Buy GMG Tokens" />
      </div>
      <div className={styles.layerbox}></div>
      <div className="container-md">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Partners
        </motion.h2>
      </div>
      <Marquee>
        {marqueeItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <LazyImage
                image={{
                  src: item.icon,
                  alt: item.alt,
                }} />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </Marquee>
      <div className={styles.topContentAlignment}>
        <Marquee direction="right">
          {[...marqueeItemsSec, ...marqueeItemsSec].map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <LazyImage
                  image={{
                    src: item.icon,
                    alt: item.alt,
                  }} />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
