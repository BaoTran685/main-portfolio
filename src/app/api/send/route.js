import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req, res) {
  const body = await req.json()
  const { personal_email, personal_subject, personal_message } = body
  try {
    const data = await resend.emails.send({
      from: "Bot <onboarding@resend.dev>",
      to: 'baopei05@gmail.com',
      subject: `${personal_subject}`,
      html: `<p>${personal_email} is sending an email with a message: <i>${personal_message}</i> </p>`
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
