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
    const phone = formData.get('phone') as string;

    const mailOptions: SendMailOptions = {
      from: 'batrbekk@gmail.com',
      to: 'firuzanails@gmail.com',
      subject: 'Заявка на обратный звонок',
      html: `
        <h2>Новая заявка на обратный звонок</h2>
        <p><strong>Телефон:</strong> ${phone || 'Не указан'}</p>
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