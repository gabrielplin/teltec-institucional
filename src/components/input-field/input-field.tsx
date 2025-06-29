'use client';

import React from 'react';
import styles from './input-field.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  register: UseFormRegisterReturn;
}

function InputFieldComponent({
  placeholder,
  type = 'text',
  error,
  register,
}: InputFieldProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...register}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default InputFieldComponent;
