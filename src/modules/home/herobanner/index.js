
'use client'
import { motion } from "framer-motion";
import styles from "./herobanner.module.scss";
import BuyGmgToken from "./buyGmgToken";
import ListedOfContent from '../listedOfContent';
const Video = '/assets/video/video.mp4';
export default function Herobanner() {
  return (
    <>
      <motion.div
        className={styles.herobanner}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className={styles.videoImage}>
          <video src={Video} autoPlay loop muted playsInline alt="Play To Earn Games"/>
        </div>
        <div className={styles.layer}></div>
        <div className={styles.contentAlignment}>
        <div className="container-sm">
          <div className={styles.grid}>
            <motion.div
              className={styles.griditems}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.text}>
                <h1>
                  <span className={styles.gradientText}> Emergence </span> of New Era in Gamefi! 
                </h1>
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.7 }}
                >
                  Gamerge– a next-generation hi-tech skill-based fun-to-play-to-earn 
                  <span> crypto gaming platform </span>
                  built on Unity engine!
                </motion.p>
              </div>
              <motion.div
                className={styles.twoIconAlignment}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.3, delayChildren: 0.6 }}
              >
                <button>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4_132)">
                      <path d="M15.714 26C16.5834 26 17.3415 25.2419 17.3415 24.3726V20.5718H18.4281C19.0802 20.5718 19.5148 20.1371 19.5148 19.4851V8.62962H6.48516V19.4852C6.48516 20.1372 6.91982 20.5719 7.57182 20.5719H8.65857V24.3727C8.65857 25.242 9.4165 26.0001 10.286 26.0001C11.1552 26.0001 11.9133 25.242 11.9133 24.3727V20.5719H14.0867V24.3727C14.0866 25.2419 14.8447 26 15.714 26ZM22.229 19.4852C23.0983 19.4852 23.8562 18.7272 23.8562 17.8578V10.2564C23.8562 9.39163 23.0983 8.62962 22.229 8.62962C21.3596 8.62962 20.6015 9.39163 20.6015 10.2564V17.8578C20.6015 18.7271 21.3595 19.4852 22.229 19.4852ZM3.77106 19.4852C4.64048 19.4852 5.39849 18.7272 5.39849 17.8578V10.2564C5.39849 9.39163 4.64056 8.62962 3.77106 8.62962C2.90173 8.62962 2.1438 9.39163 2.1438 10.2564V17.8578C2.1438 18.7271 2.90173 19.4852 3.77106 19.4852ZM18.2107 0.163975C17.9935 -0.0546585 17.67 -0.0546585 17.4528 0.163975L15.9953 1.61659L15.9281 1.68374C15.0639 1.25099 14.0949 1.03487 13.0159 1.03279L13.0001 1.03261H12.9999L12.984 1.03279C11.905 1.03487 10.9361 1.25099 10.072 1.68374L10.0046 1.61659L8.54717 0.163975C8.32975 -0.0546585 8.00649 -0.0546585 7.78924 0.163975C7.57182 0.381395 7.57182 0.704053 7.78924 0.921299L9.19908 2.3314C8.74481 2.63471 8.33288 3.00587 7.97465 3.43038C7.11703 4.44695 6.57001 5.76994 6.49479 7.20338C6.49409 7.2183 6.49262 7.23305 6.49193 7.24798C6.48736 7.34598 6.48511 7.44407 6.48516 7.54218H19.5148C19.5148 7.44371 19.5124 7.34558 19.508 7.24798C19.5073 7.23305 19.5059 7.2183 19.505 7.20338C19.4299 5.76994 18.8827 4.44686 18.0251 3.43047C17.6671 3.00596 17.255 2.6348 16.8007 2.33149L18.2107 0.921386C18.4281 0.704053 18.4281 0.381395 18.2107 0.163975ZM10.2839 5.64483C10.068 5.64483 9.86096 5.55907 9.70829 5.4064C9.55563 5.25373 9.46986 5.04667 9.46986 4.83077C9.46986 4.61487 9.55563 4.40781 9.70829 4.25514C9.86096 4.10247 10.068 4.01671 10.2839 4.01671C10.4998 4.01671 10.7069 4.10247 10.8596 4.25514C11.0122 4.40781 11.098 4.61487 11.098 4.83077C11.098 5.04667 11.0122 5.25373 10.8596 5.4064C10.7069 5.55907 10.4998 5.64483 10.2839 5.64483ZM15.716 5.64483C15.5001 5.64483 15.2931 5.55907 15.1404 5.4064C14.9877 5.25373 14.902 5.04667 14.902 4.83077C14.902 4.61487 14.9877 4.40781 15.1404 4.25514C15.2931 4.10247 15.5001 4.01671 15.716 4.01671C15.9319 4.01671 16.139 4.10247 16.2917 4.25514C16.4443 4.40781 16.5301 4.61487 16.5301 4.83077C16.5301 5.04667 16.4443 5.25373 16.2917 5.4064C16.139 5.55907 15.9319 5.64483 15.716 5.64483Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_132">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  Download The Application
                </button>
              </motion.div>
            </motion.div>
            {/* <motion.div
              className={styles.griditems}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            > */}
              <BuyGmgToken />
            {/* </motion.div> */}
          </div>
        </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ListedOfContent />
      </motion.div>
    </>
  );
}
