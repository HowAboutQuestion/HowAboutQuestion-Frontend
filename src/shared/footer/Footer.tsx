/**
 * @internal
 * @file Footer.tsx
 * @summary 공용 푸터 컴포넌트입니다.
 * @author eunchang
 * @create 2026.05.12
 * @note
 * - 2026.05.12: 최초 생성 (eunchang)
 */

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import style from '@/shared/footer/Footer.module.scss';

/**
 * 공용 푸터를 렌더링합니다.
 * @returns footer 컴포넌트
 */
const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.title}>HowAboutQuestion</div>

        <div className={style.description}>
          Learn through questions, Remember through repetition.
        </div>

        <div className={style.githubSection}>
          <a
            href="https://github.com/khaelim1311"
            target="_blank"
            rel="noopener noreferrer"
            className={style.githubLink}
          >
            <FaGithub />
            <span>khaelim1311</span>
          </a>

          <span className={style.divider}>|</span>

          <a
            href="https://github.com/cod0216"
            target="_blank"
            rel="noopener noreferrer"
            className={style.githubLink}
          >
            <FaGithub />
            <span>cod0216</span>
          </a>
        </div>

        <div className={style.copyright}>© 2026 HowAboutQuestion. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
