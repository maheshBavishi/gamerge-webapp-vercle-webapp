import styles from './listedOfContent.module.scss';
import LazyImage from '@/lazyImage';
const CoinGabbarIcon = '/assets/images/coin-gabbar.png';
const IcoholderIcon = '/assets/images/icoholder.svg';
const QuillAuditsIcon = '/assets/images/quillAudits.svg';
const CertikIcon = '/assets/images/certik.svg';

export default function ListedOfContent() {

  return (
    <div className={styles.listedOfContent}>
      <div className='container-xs'>
        <div className={styles.grid}>
          <div
            className={styles.griditems}
          >
            <h3>
              We are listed on
            </h3>
            <div className={styles.twoContentalignment}>
              <div className={styles.listBox} >
                <a aria-label='link' href='https://www.coingabbar.com/en/crypto-ico-details/gamerge-latest-ico-token-gamefi-project' target='_blank'>
                  <LazyImage
                    image={{
                      src: CoinGabbarIcon,
                      alt: `Gaming Aggregator Platform`,
                    }} />
                </a>
              </div>
              <div className={styles.listBox} >
                <a aria-label='link' href='https://icoholder.com/en/gamerge-1090860' target='_blank'>
                  <LazyImage
                    image={{
                      src: IcoholderIcon,
                      alt: `Crypto Payments`,
                    }} />
                </a>
              </div>
            </div>
          </div>
          <div
            className={styles.griditems}
          >
            <h3>
              Audited By
            </h3>
            <div className={styles.twoContentalignment}>
              <div className={styles.listBox} >
                <a href='https://www.quillaudits.com/leaderboard/gamerge' target='_blank' aria-label='QuillAudits'>
                  <LazyImage
                    image={{
                      src: QuillAuditsIcon,
                      alt: `QuillAuditsIcon`,
                    }} />
                </a>
              </div>
              <div className={styles.listBox} >
                <a href='https://skynet.certik.com/projects/gamerge' target='_blank' aria-label='certik'>
                  <LazyImage
                    image={{
                      src: CertikIcon,
                      alt: `CertikIcon`,
                    }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
