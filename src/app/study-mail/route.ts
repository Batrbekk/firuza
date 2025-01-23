import nodemailer, { SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'batrbekk@gmail.com',
    pass: 'qoax uorr mlks glis',
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const course = formData.get('course') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const salon = formData.get('salon') as string;

    const mailOptions: SendMailOptions = {
      from: 'batrbekk@gmail.com',
      to: 'firuzanails@gmail.com',
      subject: `Запрос на обучение от ${name || 'посетителя сайта'}`,
      html: `
        <h2>Новая заявка на обучение</h2>
        <p><strong>Выбранный курс:</strong> ${course}</p>
        <p><strong>ФИО:</strong> ${name || 'Не указано'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || 'Не указан'}</p>
        <p><strong>Выбранный салон:</strong> ${salon}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Mail error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 