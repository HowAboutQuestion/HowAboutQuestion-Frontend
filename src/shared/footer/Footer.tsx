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
import style from '@/shared/footer/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.developer}>권해림, 최은창</div>
    </div>
  );
};

export default Footer;
