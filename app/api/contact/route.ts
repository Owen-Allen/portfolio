import sgMail from '@sendgrid/mail';

export async function POST(req: Request) {
    console.log("RECIEVED POST")
    let SENDGRID_API_KEY = process.env.SENDGRID_API_KEY != undefined ? process.env.SENDGRID_API_KEY : "";
    console.log(SENDGRID_API_KEY)
    sgMail.setApiKey(SENDGRID_API_KEY);
    let body = await req.json()

    const msg = {
      from: 'autoemailer0@gmail.com',
      to: 'owenallen.2000@gmail.com',
      subject: `Message From ${body.name}`,
      text: body.message + " | Sent from: " + body.email,
      html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`
    }

    try {
      await sgMail.send(msg);
      return new Response(null, { status: 200, statusText: 'Email sent successfully' });
  } catch (error) {
      console.error('Error sending email:', error);
      console.log(error)
      return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: "smtp.gmail.com",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
//   secure: true,
// })

// transporter.sendMail(mailData, function (err: any, info: any) {
//   if(err){
//     console.log('error')
//     console.log(err)
//     return new Response(null, { status: 500, statusText: "NOT WORKING" })
//   }else{
//     console.log('hello?')
//     console.log(info)
// }})