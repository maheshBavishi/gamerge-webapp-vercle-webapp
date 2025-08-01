'use client'
import React from 'react'
import styles from './roleAsAmbassador.module.scss';
import DownIcon from '@/components/icons/downIcon';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const gridData = [
  {
    number: '01.',
    title: 'Refer Project',
    description:
      'Refer strong crypto projects with active communities and help them unlock gaming utility on Gamerge.',
  },
  {
    number: '02.',
    title: 'Content Creation',
    description:
      
        "Produce and share content that highlights Gamerge's offerings and developments.",
  },
  {
    number: '03.',
    title: 'Community Engagement',
    description:
      'Actively participate in discussions, events, and initiatives to promote Gamerge.',
  },
  {
    number: '04.',
    title: 'Feedback Provider',
    description:
      'Offer insights and suggestions to help improve the platform and user experience.',
  },
];

function AnimatedGridItem({ number, title, description, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: index * 0.15 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      className={styles.griditems}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <h4>{number}</h4>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default function RoleAsAmbassador() {
  return (
    <div>
      <div className={styles.businessBenefits}>
        <div className='container-md'>
          <div className={styles.iconCenter}>
            <DownIcon />
          </div>
          <div className={styles.title}>
            <h2>Your Role as an Ambassador</h2>
          </div>
          <div className={styles.grid}>
            {gridData.map((item, idx) => (
              <AnimatedGridItem key={item.number} {...item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
