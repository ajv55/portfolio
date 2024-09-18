import { WelcomeEmail } from '@/app/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {

    const body = await req.json();
    console.log(body);
    
   const { name, email, message  } = body
   console.log(email)
   console.log(message)

   if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Abel <abel@myfitgenius.com>',
      to: 'abejevilla55@gmail.com',
      subject: 'Message',
      react: WelcomeEmail({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
