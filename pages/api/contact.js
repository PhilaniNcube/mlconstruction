const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async function handler (req, res) {
  const { message, email, telephone, fullName } = req.body
  const msg = {
    to: 'info@maslu.co.za',
    from: `info@maslu.co.za`,
    subject: 'Contact Form',
    text: `Hello you have received a contact form submission
    From: ${fullName}
    Email: ${email}
    Tel: ${telephone}
    Message: ${message}
    `,
  }

  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}


