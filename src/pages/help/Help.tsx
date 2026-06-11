import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/shared/navbar/Navbar';
import Footer from '@/shared/footer/Footer';
import HelpSidebar from '@/pages/help/components/HelpSidebar';
import HelpSection from '@/pages/help/components/HelpSection';
import { helpCategories } from '@/pages/help/constants';
import styles from '@/pages/help/Help.module.scss';
import logoImg from '@/assets/images/logo.webp';

/**
 *
 */
const Help: React.FC = () => {
  const firstStepId = helpCategories[0].steps[0].id;
  const [activeStepId, setActiveStepId] = useState(firstStepId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    helpCategories.forEach(category => {
      category.steps.forEach(step => {
        const el = sectionRefs.current.get(step.id);
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveStepId(step.id);
            }
          },
          { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
        );

        observer.observe(el);
        observers.push(observer);
      });
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /**
   *
   */
  const handleStepClick = (_categoryId: string, stepId: string) => {
    const el = sectionRefs.current.get(stepId);
    if (el) {
      const NAVBAR_HEIGHT = 60;
      const PADDING = 24;
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - PADDING;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>도움말 | 문제어때</title>
        <meta
          name="description"
          content="문제어때의 주요 기능을 쉽게 알아보세요. 문제 관리, 문제 풀이, 대시보드 사용법을 안내합니다."
        />
      </Helmet>
      <Navbar />
      <div className={styles.body}>
        <HelpSidebar
          categories={helpCategories}
          activeStepId={activeStepId}
          onStepClick={handleStepClick}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className={styles.mainWrapper}>
          <main className={styles.main}>
            <div className={styles.hero}>
              <h1 className={styles.heroTitle}>도움말</h1>
              <p className={styles.heroDesc}>문제어때의 주요 기능을 쉽게 알아보세요.</p>
            </div>
            {helpCategories.map(category => (
              <div key={category.id} className={styles.categoryBlock}>
                <h2 className={styles.categoryTitle}>{category.label}</h2>
                <div className={styles.sectionList}>
                  {category.steps.map(step => (
                    <HelpSection
                      key={step.id}
                      step={step}
                      ref={el => {
                        if (el) sectionRefs.current.set(step.id, el);
                        else sectionRefs.current.delete(step.id);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      <button
        className={styles.floatingBtn}
        onClick={() => setIsSidebarOpen(prev => !prev)}
        aria-label="목차 열기"
      >
        <img src={logoImg} alt="목차" />
      </button>

      <Footer />
    </div>
  );
};

export default Help;
