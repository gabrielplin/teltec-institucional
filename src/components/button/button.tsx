import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  label: string;
  hoverColor?: string;
  icon?: ReactNode;
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
        props.variant === 'tertiary' && styles.buttonTertiary,
        props.variant === 'ghost' && styles.buttonGhost,
        props.className
      )}
      style={{ '--hover-color': props.hoverColor } as React.CSSProperties}
      {...props}
    >
      {props.label}
      {props.icon && props.icon}
    </button>
  );
}

export default ButtonComponent;
