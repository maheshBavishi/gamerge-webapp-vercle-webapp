'use client'
import React from 'react'
import styles from './telegramIconFixed.module.scss';
import { motion } from "framer-motion";
export default function TelegramIconFixed() {
    return (
        <motion.div className={styles.telegramIconFixed} initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}>
           <a href='https://t.me/gamergejames' target='_blank' rel='noreferrer' aria-label='Telegram'>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1213_11719)">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#039BE5" />
                    <path d="M5.49102 11.7383L17.061 7.27725C17.598 7.08325 18.067 7.40825 17.893 8.22025L17.894 8.21925L15.924 17.5003C15.778 18.1583 15.387 18.3183 14.84 18.0083L11.84 15.7973L10.393 17.1913C10.233 17.3513 10.098 17.4863 9.78802 17.4863L10.001 14.4333L15.561 9.41025C15.803 9.19725 15.507 9.07725 15.188 9.28925L8.31702 13.6153L5.35502 12.6913C4.71202 12.4873 4.69802 12.0483 5.49102 11.7383Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1213_11719">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
           </a>
        </motion.div>
    )
}
