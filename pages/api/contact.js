const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async function handler (req, res) {
  const { message, email, telephone, fullName } = req.body
  
  const messageBody = `From: ${fullName} - Email: ${email} - Telephone: ${telephone} - Message: ${message}`
  
  const msg = {
    to: 'info@maslu.co.za',
    from: 'info@maslu.co.za',
    subject: 'Contact Form',
    text: messageBody,
  }

 try { 
 await sgMail.send(msg)
 res.status(200).json()
 } catch (error) {
  await res.status(500).json({error})
 }
 }


