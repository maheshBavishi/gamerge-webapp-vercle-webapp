"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./blogDetailsBanner.module.scss";
import CalanderIcon from "@/components/icons/calanderIcon";
import moment from "moment";
export default function BlogDetailsBanner({ blogDetail }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 574;
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={styles.blogDetailsbanner}
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_NEXT_IMAGE_URL}${blogDetail?.detailImage?.url})`,
        height: isMobile ? "700px" : "810px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
      }}
    >
      <div className={styles.contentBox}>
        <motion.h2>{blogDetail?.title}</motion.h2>
        <motion.div className={styles.contentAlignment} variants={contentVariants}>
          <div className={styles.iconText}>
            <CalanderIcon />
            <span>{moment(blogDetail?.createdAt).format("DD MMMM, YYYY")} </span>
          </div>
          <div className={styles.line}></div>
          <span>{blogDetail?.author?.name}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
