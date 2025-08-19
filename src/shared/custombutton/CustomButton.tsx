/**
 * @internal
 * @file CustomButton.tsx
 * @summary 공용 버튼 컴포넌트입니다. 버튼 크기, 종류에 따라 일관된 디자인을 제공합니다.
 * @author khaelilm1311
 * @create 2025.08.18
 * @note
 * - 2025.08.18: 최초 생성 (khaelilm1311)
 */
import React from 'react';
import styles from './CustomButton.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface CustomButtonProps {
  text: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  const variantClass = styles[`btn-${variant}`];
  const sizeClass = styles[`btn-${size}`];

  return (
    <button
      type="button"
      className={`${styles.button} ${variantClass} ${sizeClass}`}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
