import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  label: string;
  hoverColor?: string;
  icon?: ReactNode;
}

function ButtonComponent({
  size = 'md',
  variant = 'primary',
  label,
  icon,
  className,
  hoverColor,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        size === 'sm' && styles.buttonSm,
        size === 'md' && styles.buttonMd,
        size === 'lg' && styles.buttonLg,
        variant === 'primary' && styles.buttonPrimary,
        variant === 'secondary' && styles.buttonSecondary,
        variant === 'tertiary' && styles.buttonTertiary,
        variant === 'inverse' && styles.buttonInverse,
        className // isso aqui é o segredo para funcionar fora do componente
      )}
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
      {...rest}
    >
      {label}
      {icon && icon}
    </button>
  );
}

export default ButtonComponent;
