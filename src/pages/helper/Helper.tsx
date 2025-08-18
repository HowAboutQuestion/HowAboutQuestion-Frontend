import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/shared/navbar/Navbar';
import styles from '@/pages/helper/Helper.module.scss';

const Helper: React.FC = () => {
  const sectionRefs = {
    book: useRef<HTMLDivElement | null>(null),
    community: useRef<HTMLDivElement | null>(null),
    analysis: useRef<HTMLDivElement | null>(null),
  };

  const [visible, setVisible] = useState({
    book: false,
    community: false,
    analysis: false,
  });

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          ) as keyof typeof sectionRefs | undefined;
          if (key) {
            setVisible(prev => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const initializeObserver = () => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          observer.observe(ref.current);
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setVisible(prev => ({ ...prev, [key as keyof typeof visible]: true }));
          }
        }
      });
    };

    const timer = setTimeout(initializeObserver, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      {/* 플로팅바 */}
      <div className={styles.floatingNav}>
        <div className={styles.helperLink} onClick={() => scrollToSection(sectionRefs.book)}>
          학습지
        </div>
        <div className={styles.helperLink} onClick={() => scrollToSection(sectionRefs.community)}>
          커뮤니티
        </div>
        <div className={styles.helperLink} onClick={() => scrollToSection(sectionRefs.analysis)}>
          대시보드
        </div>
      </div>

      <div className={styles.mainContainer}>
        {/* 학습지 */}
        <section
          ref={sectionRefs.book}
          className={`${styles.section} ${visible.book ? styles.visible : ''}`}
        >
          <h2>나를 위한 학습지</h2>
          <p>
            내가 만든 문제를 한눈에 확인하고
            <br />
            직접 생성, 수정, 삭제할 수 있는 공간입니다.
          </p>
          <div className={styles.placeholder}>문제집 선택, 생성 GIF 혹은 영상</div>
        </section>

        <section className={`${styles.section} ${visible.book ? styles.visible : ''}`}>
          <h3>개성있는 나만의 문제를 만들어 보세요</h3>
          <p>
            객관식, 주관식 원하는 형태로 문제를 만들 수 있고
            <br />
            태그와 이미지를 첨부하여 보다 직관적인 문제를 만들 수 있습니다.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>문제집 만드는 GIF</div>
            <div className={styles.card}>추가 기능 GIF</div>
          </div>
        </section>

        <section className={`${styles.section} ${visible.book ? styles.visible : ''}`}>
          <h3>다양한 형태의 실전 문제 풀이</h3>
          <p>시간, 문제 셔플, 문제답안 셔플 카드형식</p>
          <div className={styles.grid}>
            <div className={styles.card}>시험 문제</div>
            <div className={styles.card}>카드 문제</div>
          </div>
        </section>

        <section className={`${styles.section} ${visible.book ? styles.visible : ''}`}>
          <h3>바로 확인할 수 있는 피드백</h3>
          <div className={styles.placeholder}>피드백 이미지</div>
        </section>

        {/* 커뮤니티 */}
        <section
          ref={sectionRefs.community}
          className={`${styles.section} ${visible.community ? styles.visible : ''}`}
        >
          <h2>활발한 커뮤니티</h2>
          <p>내가 만든 문제를 공유하고 다른 사람들의 문제를 풀어보세요.</p>
          <div className={styles.placeholder}>문제집 선택, 생성 GIF 혹은 영상</div>
        </section>

        <section className={`${styles.section} ${visible.community ? styles.visible : ''}`}>
          <h3>문제집을 공유 받아 보세요</h3>
          <p>내가 만든 문제집을 공유하고 다른 사람들이 올린 문제집을 받아보세요</p>
          <div className={styles.grid}>
            <div className={styles.card}>문제집 공유 GIF</div>
            <div className={styles.card}>문제집 공유 받기 GIF</div>
          </div>
        </section>

        <section className={`${styles.section} ${visible.community ? styles.visible : ''}`}>
          <h3>그룹 게시판을 통한 커뮤니티</h3>
          <p>그룹 게시판을 통해 문제집 공유, 공지글 어쩌고 저쩌고 확인해보세요</p>
          <div className={styles.grid}>
            <div className={styles.card}>그룹 게시판 문제 공유</div>
            <div className={styles.card}>공지사항 확인</div>
          </div>
        </section>

        {/* 대시보드 */}
        <section
          ref={sectionRefs.analysis}
          className={`${styles.section} ${visible.analysis ? styles.visible : ''}`}
        >
          <h2>나만의 데이터로 학습 분석</h2>
          <p>나만의 데이터로 나의 학습을 분석해서 확인할 수 있습니다.</p>
          <div className={styles.placeholder}>대시보드 GIF 혹은 영상</div>
          <div className={styles.grid}>
            <div className={styles.card}>오늘의 학습량</div>
            <div className={styles.card}>취약점 분석</div>
          </div>
        </section>

        <section className={`${styles.section} ${visible.analysis ? styles.visible : ''}`}>
          <h3>오늘의 학습량을 확인해보세요</h3>
          <p>나만의 데이터로 나의 학습을 분석해서 확인할 수 있습니다.</p>
          <div className={styles.grid}>
            <div className={styles.card}>오늘 관련 학습 GIF</div>
            <div className={styles.card}>설명?</div>
          </div>
        </section>

        <section className={`${styles.section} ${visible.analysis ? styles.visible : ''}`}>
          <h3>취약점 분석</h3>
          <p>취약점</p>
          <div className={styles.grid}>
            <div className={styles.card}>태그</div>
            <div className={styles.card}>설명</div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};

export default Helper;
