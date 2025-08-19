/**
 * @internal
 * @file Welcome.tsx
 * @summary 웰컴 페이지(메인 페이지)에 대한 컴포넌트입니다. <br> 초기 진입 시 애니메이션이 실행됩니다.
 * @author khaelilm1311
 * @create 2025.08.18
 * @note
 * - 2025.08.18: 최초 생성 (khaelilm1311)
 */
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/shared/navbar/Navbar';
import styles from '@/pages/welcome/Welcome.module.scss';
import CustomButton from '@/shared/custombutton/CustomButton';

const Welcome: React.FC = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    learning: useRef<HTMLDivElement>(null),
    community: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    popular: useRef<HTMLDivElement>(null),
  };

  const [visible, setVisible] = useState({
    hero: false,
    learning: false,
    community: false,
    features: false,
    popular: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

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
              <CustomButton text="문제풀기" variant="primary" size="medium" />
              <CustomButton text="학습하기" variant="secondary" size="medium" />
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="src/assets/images/logo.png" alt="Hero" />
          </div>
        </section>

        <section
          ref={sectionRefs.learning}
          className={`${styles.learningAnalytics} ${visible.learning ? styles['animate-stagger'] : ''}`}
        >
          <div className={styles.learningBox}>
            <h3>나를 위한 학습지</h3>
          </div>
          <div className={styles.analyticsBox}>
            <h3>나만의 데이터로 학습 분석</h3>
          </div>
        </section>

        <section
          ref={sectionRefs.community}
          className={`${styles.community} ${visible.community ? styles['animate-stagger'] : ''}`}
        >
          <h3>다양한 커뮤니티</h3>
        </section>

        <section
          ref={sectionRefs.features}
          className={`${styles.features} ${visible.features ? styles['animate-stagger'] : ''}`}
        >
          <h3>학습을 위한 다양한 기능</h3>
        </section>

        <section
          ref={sectionRefs.popular}
          className={`${styles.popular} ${visible.popular ? styles['animate-stagger'] : ''}`}
        >
          <h3>인기있는 문제집을 지금 만나보세요!</h3>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
