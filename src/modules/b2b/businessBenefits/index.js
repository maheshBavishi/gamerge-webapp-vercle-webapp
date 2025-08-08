'use client'
import React from 'react'
import styles from './businessBenefits.module.scss';
import DownIcon from '@/components/icons/downIcon';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
  {
    number: '01.',
    title: 'Token Buyback Opportunities',
    description:
      'Through 1v1 combat modes and tournaments, your project can generate demand and execute strategic buybacks from earned tokens through fees—supporting long-term value.',
  },
  {
    number: '02.',
    title: 'Airdrop Campaigns at Scale',
    description:
      'Instantly boost awareness with airdrops to our active community. Create impact and visibility from day one.',
  },
  {
    number: '03.',
    title: 'End-to-End Marketing Support',
    description:
      'Gain exposure through Gamerge’s marketing ecosystem—socials, influencers, platform banners, and more. We help you grow your brand, not just list your token.',
  },
  {
    number: '04.',
    title: 'Credibility Through Partnership',
    description:
      'Join a trusted GameFi network. Being part of the Gamerge ecosystem adds legitimacy to your project and builds user confidence.',
  },
];

export default function BusinessBenefits() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
      className={styles.businessBenefits}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className='container-md'>
        <motion.div className={styles.iconCenter} variants={itemVariants}>
          <DownIcon />
        </motion.div>
        <motion.div className={styles.title} variants={itemVariants}>
          <h2>business benefits that
            set gamerge apart</h2>
        </motion.div>
        <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={styles.griditems}
          variants={itemVariants}
          whileHover={{
            boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.80)',
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <h4>{card.number}</h4>
          <span>{card.number}</span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
      </div>
    </motion.div>
  )
}
