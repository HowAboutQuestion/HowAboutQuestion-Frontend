/**
 * @internal
 * @file Navbar.tsx
 * @summary 공용 상단 네비게이션 컴포넌트입니다.
 * @author khaelilm1311
 * @create 2025.08.18
 * @note
 * - 2025.08.18: 최초 생성 (khaelilm1311)
 */
import React from 'react';
import CustomButton from '@/shared/custombutton/CustomButton';
import styles from '@/shared/navbar/Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoBox}>
        <img className={styles.logoImage} src="src/assets/images/logo.png" />
        <span className={styles.logoTitle}>문제어때</span>
      </div>
      <div className={styles.navLinks}>
        <div>소개</div>
        <div>도움말</div>
        <div>고객센터</div>
      </div>

      <div className={styles.actions}>
        <CustomButton text="로그인" variant="primary" size="medium" />
        <CustomButton text="다운로드" variant="secondary" size="medium" />
      </div>
    </div>
  );
};

export default Navbar;
