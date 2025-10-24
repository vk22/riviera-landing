import { defineEventHandler, readBody } from 'h3'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { first_name, last_name, email, phone, company, interest } = body

  if (!email || !first_name) {
    event.res.statusCode = 400
    return { error: 'First Name and Email address are required.' }
  }

  try {
    // Отправляем письмо на свою почту
    await resend.emails.send({
      from: 'riviera@resend.dev',
      to: 'v.kushnir22@gmail.com, s.artamonova@mered.ae',
      subject: 'Riviera New Interest',
      text: `First Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\nPhone: ${phone}`,
    })

    return { success: true }
  } catch (err) {
    console.error('Error sending email:', err)
    event.res.statusCode = 500
    return { error: 'Error sending email' }
  }

  return { success: true }
})
