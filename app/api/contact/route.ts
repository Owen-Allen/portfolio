


export async function POST(req: Request) {
    console.log("RECIEVED POST")
    let nodemailer = require('nodemailer')
    let body = await req.json()
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from: 'demo email',
      to: 'owenallen.2000@gmail.com',
      subject: `Message From ${body.name}`,
      text: body.message + " | Sent from: " + body.email,
      html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`
    }

    console.log(mailData)
    transporter.sendMail(mailData, function (err: any, info: any) {
      if(err){
        console.log('error')
        console.log(err)
        return new Response(null, { status: 500, statusText: "NOT WORKING" })
      }else{
        console.log('hello?')
        console.log(info)
    }})

    return new Response(null, { status: 200, statusText: "working!" })
}