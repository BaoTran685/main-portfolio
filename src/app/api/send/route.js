import { Resend } from 'resend'
import { Redis } from '@upstash/redis'
import { format } from 'date-fns';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req, res) {
  const body = await req.json()
  const { personal_email, personal_subject, personal_message } = body
  const ret = await redis.get(personal_email)
  let current_date = format(new Date(), 'MMMM do yyyy, h:mm:ss a');
  
  if (ret) {
    console.log(ret)
    ret.data.push({subject: personal_subject, message: personal_message, time: current_date})
    await redis.set(personal_email, ret)
  } else {
    await redis.set(personal_email, {email: personal_email, data: [{subject: personal_subject, message: personal_message, time: current_date}]})
  }
  
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
