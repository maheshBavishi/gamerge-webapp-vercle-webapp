'use client'
import React, { useEffect, useState } from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import Button from '../button';
import Link from 'next/link';
import Topbar from '../topbar';
import classNames from 'classnames';
import MobileMenuIcon from '../icons/mobileMenuIcon';
import CloseIcon from '../icons/closeIcon';
const HeaderVec = '/assets/images/header-vec.png';
const Logo = '/assets/logo/logo.svg';
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("noScroll");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "topToDown" : "downToTop";
      if (currentScrollTop === 0) {
        setScrollDirection("noScroll");
      } else if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
}
export default function Header() {
  const scrollDirection = useScrollDirection();
  const [header, setHeader] = useState(false);
  return (
    <>
      <div className={classNames(
        styles.topbarAlignment,
        scrollDirection === 'downToTop'
          ? styles.show
          : scrollDirection === 'noScroll'
            ? null
            : styles.hide
      )}>
        <Topbar />
        <header className={styles.header}>
          <div className='container-md'>
            <div className={styles.headerAlignment}>
              <Link href="/">
                <div className={styles.logo}>
                  <Image src={Logo} alt="Logo" layout='fill' />
                </div>
              </Link>
              <div className={styles.rightalignment}>
                <div className={styles.menu}>
                  <Link href="/presale">Presale</Link>
                  <Link href="/staking">Staking</Link>
                  <Link href="/b2b">B2b Solutions</Link>
                  <a href='https://sweepwidget.com/c/86895-oiy9dkpt' target='_blank' aria-label='airdrop'>airdrop</a>
                  <a aria-label='Games'>Games</a>
                  <Link href="/blog">blog</Link>
                </div>
                <div className={styles.button}>
                  <div className={styles.headerBtn}>
                    <Button text="Connect Wallet" />
                  </div>
                  <div className={styles.headerBtn}>
                    <Button text="Play Now" fillwhite />
                  </div>
                  <div className={styles.mobileMenu} onClick={() => setHeader(!header)}>
                    <MobileMenuIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
        <Topbar />
        <div className={styles.mobilesubHeader}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={Logo} alt="Logo" layout='fill' />
            </div>
          </Link>
          <div onClick={() => setHeader(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.mobileBody}>
          <div className={styles.vec}>
            <img src={HeaderVec} alt='HeaderVec' />
          </div>
          <div className={styles.menu}>
            <Link onClick={() => setHeader(false)} href="/presale">Presale</Link>
            <Link onClick={() => setHeader(false)} href="/staking">Staking</Link>
            <Link onClick={() => setHeader(false)} href="/b2b">B2b Solutions</Link>
            <a onClick={() => setHeader(false)} href='https://sweepwidget.com/c/86895-oiy9dkpt' target='_blank' aria-label='airdrop'>airdrop</a>
            <a onClick={() => setHeader(false)} aria-label='Games'>Games</a>
            <Link onClick={() => setHeader(false)} href="/blog">blog</Link>
          </div>
        </div>
        <div className={styles.mobileFooter}>
          <Button text="Connect Wallet" />
          <Button text="Play Now" fillwhite />
        </div>
      </div>
      {/* download the application */}
    </>
  )
}
