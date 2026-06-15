'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
    return { error: 'Resend API Key is missing or invalid. Please check your .env.local file.' };
  }

  if (!name || !email || !message) {
    return { error: 'Please fill in all fields.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['naveenkumarr7722@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: 'Failed to send message. Please try again later.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { error: 'Something went wrong. Please try again.' };
  }
}
