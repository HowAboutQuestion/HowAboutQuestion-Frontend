/**
 * @internal
 * @file landing.tsx
 * @summary 랜딩 페이지(레거시 다운로드)에 대한 컴포넌트입니다.
 * @author eunchang
 * @create 2026.05.12
 * @note
 * - 2026.05.12: 최초 생성 (eunchang)
 */
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/shared/navbar/Navbar';
import styles from '@/pages/landing/Landing.module.scss';
import CustomButton from '@/shared/custombutton/CustomButton';

/**
 *
 */
const Landing: React.FC = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
  };

  const [visible, setVisible] = useState({
    hero: false,
    features: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    /**
     *
     */
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const key = Object.keys(sectionRefs).find(
            k => sectionRefs[k as keyof typeof sectionRefs].current === entry.target,
          ) as keyof typeof sectionRefs;
          if (key) {
            setVisible(v => ({ ...v, [key]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <section
          ref={sectionRefs.hero}
          className={`${styles.hero} ${visible.hero ? styles['animate-stagger'] : ''}`}
        >
          <div className={styles.heroText}>
            <h1>내 손 안에 작은 학습방</h1>
            <h2>문제 어때</h2>
            <div className={styles.heroButtons}>
              <CustomButton text="다운로드" variant="primary" size="medium" />
              <CustomButton text="도움말" variant="secondary" size="medium" />
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="src/assets/images/logo.png" alt="Hero" />
          </div>
        </section>

        <section
          ref={sectionRefs.features}
          className={`${styles.features} ${visible.features ? styles['animate-stagger'] : ''}`}
        >
          <h3>학습을 위한 다양한 기능</h3>
        </section>
      </div>
    </div>
  );
};

export default Landing;
