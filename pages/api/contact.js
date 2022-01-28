import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY)

const sendEmail = async (req, res) => {
  const { message } = req.body
  const msg = {
    to: 'info@robia.co.za',
    from: 'info@robia.co.za',
    subject: 'Contact Form',
    text: `Hello you have received a contact form submission
    Message: ${message}`,
  }

  try {
    await sgMail.send(msg)
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}

export default sendEmail
