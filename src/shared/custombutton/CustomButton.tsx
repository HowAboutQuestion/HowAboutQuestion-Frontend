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
