import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/shared/navbar/Navbar';
import Footer from '@/shared/footer/Footer';
import HelpSidebar from '@/pages/help/components/HelpSidebar';
import HelpSection from '@/pages/help/components/HelpSection';
import { helpCategories } from '@/pages/help/constants';
import styles from '@/pages/help/Help.module.scss';

/**
 *
 */
const Help: React.FC = () => {
  const firstStepId = helpCategories[0].steps[0].id;
  const [activeStepId, setActiveStepId] = useState(firstStepId);
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <HelpSidebar
          categories={helpCategories}
          activeStepId={activeStepId}
          onStepClick={handleStepClick}
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
      <Footer />
    </div>
  );
};

export default Help;
