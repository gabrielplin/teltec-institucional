'use client';

import { useForm } from 'react-hook-form';
import { NewsletterFormInputs } from '@/types/newsletter';
import { submitToRDStation } from '@/services/rdStationService';

export function useNewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormInputs>();

  const onSubmit = async (data: NewsletterFormInputs) => {
    try {
      await submitToRDStation(data.email);
    } catch (error) {
      console.error('Failed to submit to RD Station', error);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
}
