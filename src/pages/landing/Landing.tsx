import React, { useMemo, useState, useRef, useEffect } from 'react';
import Navbar from '@/shared/navbar/Navbar';
import Footer from '@/shared/footer/Footer';
import CustomButton from '@/shared/custombutton/CustomButton';
import styles from '@/pages/landing/Landing.module.scss';
import FeatureDetailCard from '@/pages/landing/components/FeatureDetailCard';
import type { FeatureTabId } from '@/pages/landing/types';
import { featureItems } from '@/pages/landing/constants/featureItems';
import { FaApple, FaWindows } from 'react-icons/fa';

/**
 *
 */
const Landing: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<FeatureTabId>('dashboard');

  const activeFeature = useMemo(
    () => featureItems.find(item => item.id === activeFeatureId) ?? featureItems[0],
    [activeFeatureId],
  );

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
  };
  const [visible, setVisible] = useState({
    hero: false,
    features: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.mainContainer}>
        <section
          ref={sectionRefs.hero}
          className={`${styles.hero} ${visible.hero ? styles['animate-stagger'] : ''}`}
        >
          <div className={styles.heroText}>
            <h1>내 안의 작은 학습방</h1>
            <h2>문제 어때</h2>
            <div className={styles.heroButtons}>
              <CustomButton
                text="windows"
                variant="primary"
                icon={<FaWindows />}
                size="medium"
                onClick={() =>
                  window.open(
                    'https://github.com/HowAboutQuestion/Legacy-HowAboutQuestion/releases/latest/download/HowAboutQuestion.exe',
                    '_blank',
                  )
                }
              />
              <CustomButton
                text="macOS"
                variant="primary"
                icon={<FaApple />}
                size="medium"
                onClick={() =>
                  window.open(
                    'https://github.com/HowAboutQuestion/Legacy-HowAboutQuestion/releases/latest/download/HowAboutQuestion.dmg',
                    '_blank',
                  )
                }
              />
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://d2ab13l3eziju4.cloudfront.net/frontend/logo.png"
              alt="문제 어때 로고"
            />
          </div>
        </section>

        <section
          ref={sectionRefs.features}
          className={`${styles.features} ${visible.features ? styles['animate-stagger'] : ''}`}
        >
          <div className={styles.featuresCard}>
            <h2 className={styles.featuresTitle}>학습을 위한 다양한 기능</h2>

            <div className={styles.featuresTabs} role="tablist" aria-label="기능 소개 탭">
              {featureItems.map(item => {
                const isActive = item.id === activeFeature.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.featureTab} ${isActive ? styles.featureTabActive : ''}`}
                    onClick={() => setActiveFeatureId(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <FeatureDetailCard feature={activeFeature} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
