'use client';

import { InputFieldTag } from '@/components/input-field';
import { useNewsletterForm } from '../useNewsletterForm';
import styles from './newsletter-form.module.scss';
import { ButtonTag } from '@/components/button';

function NewsletterFormComponent() {
  const { register, handleSubmit, errors, onSubmit } = useNewsletterForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>E-mail</h2>

      <InputFieldTag
        placeholder="Digite seu e-mail"
        type="email"
        register={register('email', {
          required: 'O e-mail é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido',
          },
        })}
        error={errors.email?.message}
      />

      <ButtonTag
        type="submit"
        label="Entrar em contato"
        size="lg"
        variant="secondary"
      />
    </form>
  );
}

export default NewsletterFormComponent;
