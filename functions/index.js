const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const firebaseConfig = functions.config()
const sgMail = require('@sendgrid/mail')

exports.httpEmail = functions.https.onRequest((req, res) => {
  if (req.method !== 'POST' && req.method !== 'OPTIONS') {
    return res.status(403).send('Forbidden!')
  }
  const { key, templateid } = firebaseConfig.sendgrid
  sgMail.setApiKey(key)
  sgMail.setSubstitutionWrappers('{{', '}}')
  return cors(req, res, () => {
    const {
      name,
      senderEmail,
      message
    } = req.body
    const mail = {
      to: 'casseds95@gmail.com',
      from: 'casseds95@gmail.com',
      subject: 'Portfolio Email',
      templateId: templateid,
      dynamic_template_data: {
        name: name,
        senderEmail: senderEmail,
        message: message,
      }
    }
    return sgMail.send(mail)
      .then(() => res.status(200).send('Success'))
      .catch(err => res.status(400).send(err))
  })
})