import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary' | 'ghost';
  label: string;
}

function ButtonComponent({ ...props }: IButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        props.size === 'sm' && styles.buttonSm,
        props.size === 'md' && styles.buttonMd,
        props.size === 'lg' && styles.buttonLg,
        props.variant === 'primary' && styles.buttonPrimary,
        props.variant === 'secondary' && styles.buttonSecondary,
        props.variant === 'ghost' && styles.buttonGhost
      )}
      {...props}
    >
      {props.label}
    </button>
  );
}

export default ButtonComponent;
