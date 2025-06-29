export async function submitToRDStation(email: string): Promise<void> {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://www.rdstation.com.br/api/landing_pages/YOUR_FORM_ID';
  form.target = '_blank';

  const emailInput = document.createElement('input');
  emailInput.name = 'email';
  emailInput.value = email;
  form.appendChild(emailInput);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
