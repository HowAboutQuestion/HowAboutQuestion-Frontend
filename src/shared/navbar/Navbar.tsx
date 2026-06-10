/**
 * @internal
 * @file Navbar.tsx
 * @summary 공용 상단 네비게이션 컴포넌트입니다.
 * @author khaelilm1311
 * @create 2025.08.18
 * @note
 * - 2025.08.18: 최초 생성 (khaelilm1311)
 * - 2026.05.12: 로그인 버튼 주석 (cod0216)
 * - 2026.06.10: 모바일 햄버거 메뉴 추가 (cod0216)
 */
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import CustomButton from '@/shared/custombutton/CustomButton';
import styles from '@/shared/navbar/Navbar.module.scss';
import { useNavbar } from '@/hooks/useNavbar';

/**
 *
 */
const Navbar: React.FC = () => {
  const { goHome, goSupport, goHelp, goIntro, handleDownload } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   *
   */
  const handleNavClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoBox} onClick={goHome} style={{ cursor: 'pointer' }}>
        <img className={styles.logoImage} src="src/assets/images/logo.png" />
        <span className={styles.logoTitle}>문제어때</span>
      </div>

      <div className={styles.navLinks}>
        <div onClick={goIntro}>소개</div>
        <div onClick={goHelp}>도움말</div>
        <div onClick={goSupport}>고객센터</div>
      </div>

      <div className={styles.actions}>
        {/* <CustomButton text="로그인" variant="primary" size="medium" /> */}
        <CustomButton text="다운로드" variant="primary" size="medium" onClick={handleDownload} />
      </div>

      <button className={styles.hamburger} onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div onClick={() => handleNavClick(goIntro)}>소개</div>
          <div onClick={() => handleNavClick(goHelp)}>도움말</div>
          <div onClick={() => handleNavClick(goSupport)}>고객센터</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
