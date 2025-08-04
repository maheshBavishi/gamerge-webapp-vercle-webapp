"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styles from './listToken.module.scss';
import classNames from "classnames";
import DownIcon from "@/components/icons/downIcon";
import Button from "@/components/button";

const BackgroundGrid = ({ className }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
            });
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className={classNames("", className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(40,40,40,0.8) 0%, rgba(20,20,20,0.6) 30%, rgba(0,0,0,0.4) 70%)",
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "120px 120px",
                    }}
                />
            </motion.div>
        </div>
    );
};

const LineGradient = ({ position }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.5, ease: "easeInOut" },
            });
        }
    }, [controls, inView]);

    const path =
        position === "left"
            ? "M1 0.23938V207.654L88 285.695C88 285.695 87.5 493.945 88 567.813"
            : "M88 0.23938V207.654L1 285.695C1 285.695 1.5 493.945 1 567.813";

    return (
        <svg
            ref={ref}
            className={ classNames(styles.lineAlignment , position==='right'? styles.rightPos: styles.leftPos) }
            // className={`absolute hidden lg:block ${position}-0 h-full`}
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="568"
            viewBox="0 0 89 568"
            fill="none"
        >
            <motion.path
                d={path}
                stroke="url(#animation_gradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path d={path} stroke={`url(#paint0_linear_${position})`} />
            <defs>
                <motion.linearGradient
                    id="animation_gradient"
                    initial={{
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0,
                    }}
                    animate={{
                        x1: 0,
                        y1: "120%",
                        x2: 0,
                        y2: "100%",
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                    }}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2EB9DF" stopOpacity="0" />
                    <stop stopColor="#2EB9DF" />
                    <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
                </motion.linearGradient>
                <linearGradient
                    id={`paint0_linear_${position}`}
                    x1={position === "left" ? "1" : "88"}
                    y1="4.50012"
                    x2={position === "left" ? "1" : "88"}
                    y2="568"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F6F6F" stopOpacity="0.3" />
                    <stop offset="0.797799" stopColor="#6F6F6F" />
                    <stop offset="1" stopColor="#6F6F6F" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default function ListToken() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
            });
        }
    }, [controls, inView]);

    return (
        <div className="container-xs3">
            <div className={styles.listTokenSection}>
                <div className={styles.listTookenBackground}>
                    <div className={styles.squreBoxDesign}></div>
                    <div className={styles.iconTextAlignment}>
                        <DownIcon/>
                        <h2>List your token today</h2>
                    </div>
                        <p>
                            Collaborate with us to grow your project, tokenize your gaming experience, and reach 
                            a larger audience.
                        </p>
                        <div className={styles.buttonCenterAlignment}>
                            <Button text="List Now"/>
                        </div>
                    <LineGradient position="left" />
                        <BackgroundGrid className="mt-8 md:mt-16 lg:mt-36 z-0" />
                      
                    <LineGradient position="right" />
                </div>
            </div>
        </div>
    );
}
